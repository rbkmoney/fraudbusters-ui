import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { merge, Observable, Subject } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

import { Channel } from '../../../../api/fb-management/swagger-codegen/model/channel';
import { Notification } from '../../../../api/fb-management/swagger-codegen/model/notification';
import { NotificationTemplate } from '../../../../api/fb-management/swagger-codegen/model/notificationTemplate';
import { NotificationsService } from '../../../../api/payments/notifications';
import { ConfigService } from '../../../../config';
import { progress } from '../../../operators';

@Injectable()
export class NotificationService {
    private SIZE = this.configService.pageSize;

    static defaultParams = {
        name: '',
        type: '',
        subject: '',
        period: '',
        frequency: '',
        channel: '',
        id: null,
    };

    private save$ = new Subject<Notification>();

    saved$ = this.save$.pipe(
        switchMap((notification) => this.notificationsService.save(notification)),
        shareReplay(1)
    );

    inProgress$ = progress(merge(this.save$), this.saved$);
    notificationsTemplates$: Observable<Array<NotificationTemplate>>;
    notificationsChannels$: Observable<Array<Channel>>;

    constructor(
        private fb: FormBuilder,
        private notificationsService: NotificationsService,
        private configService: ConfigService
    ) {
        this.notificationsTemplates$ = notificationsService.getNotificationsTemplates();
        this.notificationsChannels$ = notificationsService.getNotificationsChannels({
            searchValue: '',
            size: this.SIZE,
        });
    }

    form = this.fb.group(NotificationService.defaultParams);

    saveNotification(data: Notification) {
        this.save$.next(data);
    }
}
