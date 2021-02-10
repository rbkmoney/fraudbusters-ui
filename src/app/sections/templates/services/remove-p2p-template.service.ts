import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { combineLatest, EMPTY, merge, of, Subject } from 'rxjs';
import { catchError, filter, switchMap } from 'rxjs/operators';

import { P2pTemplatesService } from '../../../api/p2p-templates';
import { ConfirmActionDialogComponent } from '../../../shared/components/confirm-action-dialog';
import { progress } from '../../../shared/operators';

export interface RemoveTemplatesParams {
    templateID: string;
}

@Injectable()
export class RemoveP2pTemplateService {
    private removeTemplate$ = new Subject<RemoveTemplatesParams>();
    private hasError$ = new Subject();

    removed$ = this.removeTemplate$.pipe(
        switchMap((params) =>
            combineLatest([
                of(params),
                this.dialog
                    .open(ConfirmActionDialogComponent, { data: { title: `Remove template ${params.templateID}?` } })
                    .afterClosed()
                    .pipe(filter((r) => r === 'confirm')),
            ])
        ),
        switchMap(([params]) =>
            this.p2pTemplatesService.deleteTemplate(params.templateID).pipe(
                catchError((error: HttpErrorResponse) => {
                    this.snackBar.open(`${error.status}: ${error.message}`, 'OK', {
                        duration: 1500,
                    });
                    this.hasError$.next();
                    return of(EMPTY);
                })
            )
        )
    );

    inProgress$ = progress(this.removeTemplate$, merge(this.hasError$, this.removed$));

    constructor(
        private dialog: MatDialog,
        private p2pTemplatesService: P2pTemplatesService,
        private snackBar: MatSnackBar
    ) {
        this.removed$.subscribe();
    }

    removeTemplate(params: RemoveTemplatesParams) {
        this.removeTemplate$.next(params);
    }
}
