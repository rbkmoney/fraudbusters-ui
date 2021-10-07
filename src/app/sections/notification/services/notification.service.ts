import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Notification } from '../../../api/fb-management/swagger-codegen/model/notification';
import { NotificationsService } from '../../../api/payments/notifications';
import { FetchResult } from '../../../shared/utils/partial-fetcher';

@Injectable()
export class NotificationService {
    constructor(private notificationsService: NotificationsService) {}

    getNotificationById(id: string): Observable<FetchResult<Notification>> {
        return this.notificationsService.getNotifications({
            searchValue: id,
            size: 1,
        });
    }
}
