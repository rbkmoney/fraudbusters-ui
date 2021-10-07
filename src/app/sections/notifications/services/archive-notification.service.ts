import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { combineLatest, merge, NEVER, of, Subject } from 'rxjs';
import { catchError, filter, shareReplay, switchMap } from 'rxjs/operators';

import { Notification } from '../../../api/fb-management/swagger-codegen/model/notification';
import { NotificationsService } from '../../../api/payments/notifications';
import { ConfirmActionDialogComponent } from '../../../shared/components/confirm-action-dialog';
import { progress } from '../../../shared/operators';

@Injectable()
export class ArchiveNotificationService {
    private archiveNotification$ = new Subject<Notification>();
    private hasError$ = new Subject();

    archive$ = this.archiveNotification$.pipe(
        switchMap((notification) =>
            combineLatest([
                of(notification),
                this.dialog
                    .open(ConfirmActionDialogComponent, {
                        data: { title: `Archive notification ${notification.name}?` },
                    })
                    .afterClosed()
                    .pipe(filter((r) => r === 'confirm')),
            ])
        ),
        switchMap(([notification]) =>
            this.notificationsService.save(notification).pipe(
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

    inProgress$ = progress(this.archiveNotification$, merge(this.hasError$, this.archive$));

    constructor(
        private dialog: MatDialog,
        private notificationsService: NotificationsService,
        private snackBar: MatSnackBar
    ) {}

    archiveNotification(notification: Notification) {
        notification.status = 'ARCHIVE';
        this.archiveNotification$.next(notification);
    }
}
