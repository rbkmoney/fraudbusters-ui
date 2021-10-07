import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ConfigService } from '../../../config';
import { SearchNotificationParams } from '../../../sections/notifications/search-notifications-params';
import { HttpRequestModel } from '../../../shared/model/http-request-model';
import { filterParameters } from '../../../shared/utils/filter-params';
import { Channel } from '../../fb-management/swagger-codegen/model/channel';
import { ChannelListResponse } from '../../fb-management/swagger-codegen/model/channelListResponse';
import { Notification } from '../../fb-management/swagger-codegen/model/notification';
import { NotificationListResponse } from '../../fb-management/swagger-codegen/model/notificationListResponse';
import { NotificationTemplate } from '../../fb-management/swagger-codegen/model/notificationTemplate';
import { NotificationTemplateListResponse } from '../../fb-management/swagger-codegen/model/notificationTemplateListResponse';

@Injectable()
export class NotificationsService {
    private readonly fbEndpoint = `${this.configService.fbManagementEndpoint}/notifications`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    getNotifications(params: SearchNotificationParams): Observable<NotificationListResponse> {
        return this.http.get<NotificationListResponse>(`${this.fbEndpoint}`, {
            params: filterParameters(params),
        });
    }

    getNotificationsTemplates(): Observable<Array<NotificationTemplate>> {
        return this.http
            .get<NotificationTemplateListResponse>(`${this.fbEndpoint}/templates`)
            .pipe(map((response: NotificationTemplateListResponse) => response.result));
    }

    getNotificationsChannels(params: SearchNotificationParams): Observable<Array<Channel>> {
        return this.http
            .get<ChannelListResponse>(`${this.fbEndpoint}/channels`, {
                params: filterParameters(params),
            })
            .pipe(map((response: ChannelListResponse) => response.result));
    }

    getNotification(id: string): Observable<Notification> {
        return this.http.get<Notification>(`${this.fbEndpoint}/${id}`);
    }

    save(notification: Notification): Observable<any> {
        return this.http.post<Notification>(`${this.fbEndpoint}`, notification, new HttpRequestModel());
    }

    saveChannel(channel: Channel): Observable<any> {
        return this.http.post<Notification>(`${this.fbEndpoint}/channels`, channel, new HttpRequestModel());
    }

    getChannels(params: SearchNotificationParams): Observable<ChannelListResponse> {
        return this.http.get<ChannelListResponse>(`${this.fbEndpoint}/channels`, {
            params: filterParameters(params),
        });
    }

    removeChannel(name: string): Observable<string> {
        return this.http.delete(`${this.fbEndpoint}/channels/${name}`, { responseType: 'text' });
    }
}
