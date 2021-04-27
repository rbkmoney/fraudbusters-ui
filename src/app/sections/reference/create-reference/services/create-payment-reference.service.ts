import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Papa } from 'ngx-papaparse';
import { EMPTY, merge, Subject } from 'rxjs';
import { catchError, filter, shareReplay, switchMap } from 'rxjs/operators';

import { OperationType } from '../../../../shared/constants/operation-type';
import { progress } from '../../../../shared/operators';
import { CsvUtilsService } from '../../../../shared/services/utils/csv-utils.service';
import { ReferencesService } from '../../references.service';

@Injectable()
export class CreatePaymentReferenceService {
    private create$ = new Subject();
    private errors$ = new Subject();

    forms = this.fb.array([]);

    created$ = this.create$.pipe(
        switchMap(() =>
            this.referenceService.saveReferences(OperationType.Payment, this.forms.value).pipe(
                catchError((error: HttpErrorResponse) => {
                    this.snackBar.open(`${error.status}: ${error.message}`, 'OK');
                    this.errors$.next();
                    return EMPTY;
                })
            )
        ),
        filter((r) => !!r),
        shareReplay(1)
    );

    inProgress$ = progress(this.create$, merge(this.created$, this.errors$));

    constructor(
        private fb: FormBuilder,
        private referenceService: ReferencesService,
        private snackBar: MatSnackBar,
        private csvUtilsService: CsvUtilsService,
        private papa: Papa
    ) {
        this.addItem();
        this.created$.subscribe();
        this.inProgress$.subscribe((inProgress) => {
            if (inProgress) {
                this.forms.disable();
            } else {
                this.forms.enable();
            }
        });
    }

    create() {
        this.create$.next();
    }

    addItem() {
        this.forms.push(this.createItem());
    }

    removeItem(i: number) {
        this.forms.removeAt(i);
    }

    prepareFilesList(files: Array<any>): void {
        Object.values(files)
            .filter((value) => this.csvUtilsService.isValidFile(value, 'text/csv', 2097152))
            .forEach((item) =>
                this.papa.parse(item, {
                    skipEmptyLines: true,
                    header: true,
                    complete: (results) => {
                        const data = results.data;
                        if (this.csvUtilsService.isValidFormatCsv(data, item, ['template'])) {
                            this.processCsv(data);
                        }
                    },
                })
            );
    }

    private processCsv(data): void {
        for (const item of data) {
            this.forms.push(this.createItem(item.template, item.partyId, item.shopId));
        }
        this.forms.patchValue(this.forms.value);
    }

    private createItem(templateId = '', partyId = '', shopId = '') {
        return this.fb.group({
            templateId: [templateId, Validators.required],
            partyId: [partyId, Validators.required],
            shopId: [shopId],
            isDefault: false,
            isGlobal: false,
        });
    }
}
