import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { ChannelListResponse } from '../../fb-management/swagger-codegen/model/channelListResponse';
import { NotificationListResponse } from '../../fb-management/swagger-codegen/model/notificationListResponse';

@Injectable()
export class NotificationsService {
    private readonly fbEndpoint = `${this.configService.fbManagementEndpoint}/notifications`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    getNotifications(): Observable<NotificationListResponse> {
        return this.http.get<NotificationListResponse>(`${this.fbEndpoint}`);
    }

    getChannels(): Observable<ChannelListResponse> {
        return this.http.get<ChannelListResponse>(`${this.fbEndpoint}/channels`);
    }
}
