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
            this.form.setValue({ id: this.notification.id, template: this.notification.name });
            this.form.get('id').disable();
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
                    this.navigateToEdit(template.id);
                }
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    saveNotification() {
        this.notificationService.saveNotification({
            id: this.form.getRawValue().id,
            name: this.form.getRawValue().name,
        });
    }

    navigateToEdit(id) {
        this.router.navigate([`../notification/${id}`]);
    }

    back() {
        this.router.navigate([`../notifications`]);
    }
}
