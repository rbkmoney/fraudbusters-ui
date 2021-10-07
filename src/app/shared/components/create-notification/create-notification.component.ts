import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Notification } from '../../../api/fb-management/swagger-codegen/model/notification';
import { LAYOUT_GAP_L, LAYOUT_GAP_M } from '../../../tokens';
import { ErrorHandlerService } from '../../services/utils/error-handler.service';
import { NotificationService } from './services/notification.service';

@Component({
    selector: 'fb-create-notification',
    templateUrl: './create-notification.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [NotificationService],
})
export class CreateNotificationComponent implements OnInit {
    @Input() notification: Notification;

    form = this.notificationService.form;

    saved$ = this.notificationService.saved$;
    inProgress$ = this.notificationService.inProgress$;
    notificationsTemplates$ = this.notificationService.notificationsTemplates$;
    notificationsChannels$ = this.notificationService.notificationsChannels$;

    periods = ['1d', '7d', '30d'];
    frequencies = ['1m', '10m', '60m'];

    constructor(
        private router: Router,
        private notificationService: NotificationService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar,
        @Inject(LAYOUT_GAP_L) public layoutGapL: string,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    ngOnInit() {
        if (this.notification) {
            this.form.setValue({
                channel: this.notification.channel,
                frequency: this.notification.frequency,
                period: this.notification.period,
                subject: this.notification.subject,
                type: this.notification.templateId,
                name: this.notification.name,
                id: this.notification.id,
            });
        }
        this.saved$.subscribe(
            (template) => {
                if (this.notification) {
                    this.snackBar.open(`Saved success: ${template.id}`, 'OK', {
                        duration: 3000,
                    });
                } else {
                    this.snackBar.open(`Notification has been created`, 'OK', {
                        duration: 3000,
                    });
                    this.back();
                }
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    saveNotification() {
        this.notificationService.saveNotification({
            id: this.form.getRawValue().id,
            channel: this.form.getRawValue().channel,
            frequency: this.form.getRawValue().frequency,
            period: this.form.getRawValue().period,
            subject: this.form.getRawValue().subject,
            templateId: this.form.getRawValue().type,
            name: this.form.getRawValue().name,
            createdAt: new Date(Date.now()),
            status: 'ACTIVE',
        });
    }

    back() {
        this.router.navigate([`../notifications`]);
    }
}
