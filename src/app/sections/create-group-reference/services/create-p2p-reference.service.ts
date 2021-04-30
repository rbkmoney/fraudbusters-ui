import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, merge, Subject } from 'rxjs';
import { catchError, filter, shareReplay, switchMap } from 'rxjs/operators';

import { progress } from '../../../shared/operators';
import { P2pGroupsReferenceService } from '../../../shared/services/groups-reference/p2p-groups-reference.service';

@Injectable()
export class CreateP2pReferenceService {
    private create$ = new Subject();
    private errors$ = new Subject();

    forms = this.fb.array([]);

    created$ = this.create$.pipe(
        switchMap(() =>
            this.referenceService.saveGroupReference(this.forms.value).pipe(
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
        private referenceService: P2pGroupsReferenceService,
        private snackBar: MatSnackBar
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

    private createItem() {
        return this.fb.group({
            groupId: ['', Validators.required],
            identityId: ['', Validators.required],
            isDefault: false,
            isGlobal: false,
        });
    }
}