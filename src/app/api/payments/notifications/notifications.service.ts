import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { SearchDataSetParams } from '../../../sections/testing/components/payment-data-sets/search-data-set-params';
import { HttpRequestModel } from '../../../shared/model/http-request-model';
import { filterParameters } from '../../../shared/utils/filter-params';
import { ApplyRuleOnHistoricalDataSetRequest } from '../../fb-management/swagger-codegen/model/applyRuleOnHistoricalDataSetRequest';
import { CheckedDataSet } from '../../fb-management/swagger-codegen/model/checkedDataSet';
import { DataSet } from '../../fb-management/swagger-codegen/model/dataSet';
import { DataSetsResponse } from '../../fb-management/swagger-codegen/model/dataSetsResponse';
import { NotificationListResponse } from '../../fb-management/swagger-codegen/model/notificationListResponse';

@Injectable()
export class NotificationsService {
    private readonly fbEndpoint = `${this.configService.fbManagementEndpoint}/notifications`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    getNotifications(): Observable<NotificationListResponse> {
        return this.http.get<NotificationListResponse>(`${this.fbEndpoint}`);
    }
}
