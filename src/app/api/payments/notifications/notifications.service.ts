import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { SearchNotificationParams } from '../../../sections/notifications/search-notifications-params';
import { filterParameters } from '../../../shared/utils/filter-params';
import { Channel } from '../../fb-management/swagger-codegen/model/channel';
import { ChannelListResponse } from '../../fb-management/swagger-codegen/model/channelListResponse';
import { Notification } from '../../fb-management/swagger-codegen/model/notification';
import { NotificationListResponse } from '../../fb-management/swagger-codegen/model/notificationListResponse';

@Injectable()
export class NotificationsService {
    private readonly fbEndpoint = `${this.configService.fbManagementEndpoint}/notifications`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    getNotifications(params: SearchNotificationParams): Observable<NotificationListResponse> {
        return this.http.get<NotificationListResponse>(`${this.fbEndpoint}`, {
            params: filterParameters(params),
        });
    }

    getNotification(id: string): Observable<Notification> {
        return this.http.get<Notification>(`${this.fbEndpoint}/${id}`);
    }

    save(notification: Notification): Observable<any> {
        return new Observable<any>();
    }

    getChannels(params: SearchNotificationParams): Observable<ChannelListResponse> {
        return this.http.get<ChannelListResponse>(`${this.fbEndpoint}/channels`, {
            params: filterParameters(params),
        });
    }

    getChannel(id: string): Observable<Channel> {
        return this.http.get<Channel>(`${this.fbEndpoint}/channels/${id}`);
    }
}
