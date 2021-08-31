import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { combineLatest, merge, NEVER, of, Subject } from 'rxjs';
import { catchError, filter, shareReplay, switchMap } from 'rxjs/operators';

import { DataSet } from '../../../../api/fb-management/swagger-codegen/model/dataSet';
import { DataSetService } from '../../../../api/payments/data-set';
import { ConfirmActionDialogComponent } from '../../../../shared/components/confirm-action-dialog';
import { progress } from '../../../../shared/operators';

export interface RemoveReferenceParams {
    dataSet: DataSet;
}

@Injectable()
export class RemoveDataSetsService {
    private removeReference$ = new Subject<RemoveReferenceParams>();
    private hasError$ = new Subject();

    removed$ = this.removeReference$.pipe(
        switchMap((params) =>
            combineLatest([
                of(params),
                this.dialog
                    .open(ConfirmActionDialogComponent, { data: { title: `Remove dataSet ${params.dataSet.id}?` } })
                    .afterClosed()
                    .pipe(filter((r) => r === 'confirm')),
            ])
        ),
        switchMap(([params]) =>
            this.dataSetService.deleteDataSets(params.dataSet.id).pipe(
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

    constructor(private dialog: MatDialog, private dataSetService: DataSetService, private snackBar: MatSnackBar) {}

    remove(params: RemoveReferenceParams) {
        this.removeReference$.next(params);
    }
}
