import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { merge, Observable, Subject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

import { Notification } from '../../../../api/fb-management/swagger-codegen/model/notification';
import { NotificationsService } from '../../../../api/payments/notifications';
import { progress } from '../../../operators';
import { NotificationTemplate } from '../../../../api/fb-management/swagger-codegen/model/notificationTemplate';
import { ListResponse } from '../../../../api/fb-management/swagger-codegen/model/listResponse';
import { NotificationTemplateListResponse } from '../../../../api/fb-management/swagger-codegen/model/notificationTemplateListResponse';
import { Channel } from '../../../../api/fb-management/swagger-codegen/model/channel';
import { ConfigService } from '../../../../config';

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
