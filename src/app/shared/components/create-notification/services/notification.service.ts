import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

import { progress } from '../../../operators';
import { NotificationsService } from '../../../../api/payments/notifications';
import { Notification } from '../../../../api/fb-management/swagger-codegen/model/notification';

@Injectable()
export class NotificationService {
    static defaultParams = {
        id: '',
        name: '',
        subject: '',
    };

    private save$ = new Subject<Notification>();

    saved$ = this.save$.pipe(
        switchMap((notification) => this.notificationsService.save(notification)),
        shareReplay(1)
    );

    inProgress$ = progress(merge(this.save$), this.saved$);

    constructor(private fb: FormBuilder, private notificationsService: NotificationsService) {}

    form = this.fb.group(NotificationService.defaultParams);

    saveNotification(data: Notification) {
        this.save$.next(data);
    }
}
