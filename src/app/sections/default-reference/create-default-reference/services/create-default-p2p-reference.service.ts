import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, merge, Subject } from 'rxjs';
import { catchError, shareReplay, switchMap } from 'rxjs/operators';

import { OperationType } from '../../../../shared/constants/operation-type';
import { progress } from '../../../../shared/operators';
import { DefaultReferencesService } from '../../default-references.service';

@Injectable()
export class CreateDefaultP2pReferenceService {
    private create$ = new Subject();
    private errors$ = new Subject();

    form = this.fb.group({
        templateId: ['', Validators.required],
        identityId: ['', Validators.required],
        isDefault: false,
        isGlobal: false,
    });

    created$ = this.create$.pipe(
        switchMap(() =>
            this.referenceService.saveReference(OperationType.PeerToPeer, this.form.value).pipe(
                catchError((error: HttpErrorResponse) => {
                    this.snackBar.open(`${error.status}: ${error.message}`, 'OK');
                    this.errors$.next();
                    return EMPTY;
                })
            )
        ),
        shareReplay(1)
    );

    inProgress$ = progress(this.create$, merge(this.created$, this.errors$));

    constructor(
        private fb: FormBuilder,
        private referenceService: DefaultReferencesService,
        private snackBar: MatSnackBar
    ) {
        this.created$.subscribe();
        this.inProgress$.subscribe((inProgress) => {
            if (inProgress) {
                this.form.disable();
            } else {
                this.form.enable();
            }
        });
    }

    create() {
        this.create$.next();
    }
}
