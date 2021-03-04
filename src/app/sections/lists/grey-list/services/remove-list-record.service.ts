import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { combineLatest, merge, NEVER, of, Subject } from 'rxjs';
import { catchError, filter, shareReplay, switchMap } from 'rxjs/operators';
import { PaymentWbListsService } from '../../../../api/payment-wb-lists';
import { ConfirmActionDialogComponent } from '../../../../shared/components/confirm-action-dialog';
import { progress } from '../../../../shared/operators';

@Injectable()
export class RemoveListRecordService {
    private removeRecord$ = new Subject<string>();
    private hasError$ = new Subject();

    removed$ = this.removeRecord$.pipe(
        switchMap((params) =>
            combineLatest([
                of(params),
                this.dialog
                    .open(ConfirmActionDialogComponent, { data: { title: `Remove record ${params.recordID}?` } })
                    .afterClosed()
                    .pipe(filter((r) => r === 'confirm')),
            ])
        ),
        switchMap(([params]) =>
            this.paymentWbListsService.deleteListRecord(params.recordID).pipe(
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

    inProgress$ = progress(this.removeRecord$, merge(this.hasError$, this.removed$));

    constructor(
        private dialog: MatDialog,
        private paymentWbListsService: PaymentWbListsService,
        private snackBar: MatSnackBar
    ) {}

    removeRecord(recordID: string) {
        this.removeRecord$.next(params);
    }
}
