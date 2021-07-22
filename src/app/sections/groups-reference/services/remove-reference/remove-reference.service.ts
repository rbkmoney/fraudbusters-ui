import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { combineLatest, merge, NEVER, of, Subject } from 'rxjs';
import { catchError, filter, shareReplay, switchMap } from 'rxjs/operators';

import { ConfirmActionDialogComponent } from '../../../../shared/components/confirm-action-dialog';
import { progress } from '../../../../shared/operators';
import { PaymentGroupsReferencesService } from '../../../../api/payments/groups-references';
import { GroupReference } from '../../../../api/fb-management/swagger-codegen/model/groupReference';

export interface RemoveReferenceParams {
    reference: GroupReference;
}

@Injectable()
export class RemoveReferenceService {
    private removeReference$ = new Subject<RemoveReferenceParams>();
    private hasError$ = new Subject();

    removed$ = this.removeReference$.pipe(
        switchMap((params) =>
            combineLatest([
                of(params),
                this.dialog
                    .open(ConfirmActionDialogComponent, {
                        data: { title: `Remove group reference ${params.reference.id}?` },
                    })
                    .afterClosed()
                    .pipe(filter((r) => r === 'confirm')),
            ])
        ),
        switchMap(([params]) =>
            this.paymentGroupsReferencesService.deleteGroupReference(params.reference).pipe(
                catchError((error: HttpErrorResponse) => {
                    this.snackBar.open(`${error.status}: ${error.message}`, 'OK', {
                        duration: 1500,
                    });
                    this.hasError$.next();
                    return NEVER;
                })
            )
        ),
        shareReplay(1)
    );

    inProgress$ = progress(this.removeReference$, merge(this.hasError$, this.removed$));

    constructor(
        private dialog: MatDialog,
        private paymentGroupsReferencesService: PaymentGroupsReferencesService,
        private snackBar: MatSnackBar
    ) {}

    removeReference(params: RemoveReferenceParams) {
        this.removeReference$.next(params);
    }
}
