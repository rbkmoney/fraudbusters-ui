import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { combineLatest, merge, NEVER, of, Subject } from 'rxjs';
import { catchError, filter, shareReplay, switchMap } from 'rxjs/operators';

import { Channel } from '../../../api/fb-management/swagger-codegen/model/channel';
import { NotificationsService } from '../../../api/payments/notifications';
import { ConfirmActionDialogComponent } from '../../../shared/components/confirm-action-dialog';
import { progress } from '../../../shared/operators';

@Injectable()
export class RemoveChannelsService {
    private removeChannel$ = new Subject<Channel>();
    private hasError$ = new Subject();

    removed$ = this.removeChannel$.pipe(
        switchMap((channel) =>
            combineLatest([
                of(channel),
                this.dialog
                    .open(ConfirmActionDialogComponent, { data: { title: `Remove reference ${channel.name}?` } })
                    .afterClosed()
                    .pipe(filter((r) => r === 'confirm')),
            ])
        ),
        switchMap(([channel]) =>
            this.notificationsService.removeChannel(channel.name).pipe(
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

    inProgress$ = progress(this.removeChannel$, merge(this.hasError$, this.removed$));

    constructor(
        private dialog: MatDialog,
        private notificationsService: NotificationsService,
        private snackBar: MatSnackBar
    ) {}

    removeChannel(channel: Channel) {
        this.removeChannel$.next(channel);
    }
}
