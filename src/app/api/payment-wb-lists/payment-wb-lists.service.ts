import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../config';
import { HttpRequestModel } from '../../shared/model/http-request-model';
import { SearchListParams } from '../../shared/model/search-list-params';
import { filterParameters } from '../../shared/utils/filter-params';
import { PaymentCountInfo } from '../fb-management/swagger-codegen/model/paymentCountInfo';
import { PaymentFilterListRecordsResponse } from '../fb-management/swagger-codegen/model/paymentFilterListRecordsResponse';
import { WbListRecords } from '../fb-management/swagger-codegen/model/wbListRecords';
import ListTypeEnum = WbListRecords.ListTypeEnum;

@Injectable()
export class PaymentWbListsService {
    private readonly fbPaymentListsEndpoint = `${this.configService.fbManagementEndpoint}/lists`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    deleteListRow(id: string): Observable<string> {
        return this.http.delete(`${this.fbPaymentListsEndpoint}/${id}`, {
            responseType: 'text',
        });
    }

    findListRows(params: SearchListParams): Observable<PaymentFilterListRecordsResponse> {
        return this.http.get<PaymentFilterListRecordsResponse>(`${this.fbPaymentListsEndpoint}/filter`, {
            params: filterParameters(params),
        });
    }

    getNames(listTypeSearch: ListTypeEnum): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbPaymentListsEndpoint}/names`, {
            params: { listType: listTypeSearch },
        });
    }

    getAvailableListNames(): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbPaymentListsEndpoint}/availableListNames`);
    }

    saveListsRows(listType: ListTypeEnum, records: PaymentCountInfo[]): Observable<string[]> {
        return this.http.post<string[]>(
            `${this.fbPaymentListsEndpoint}`,
            { listType, records },
            new HttpRequestModel()
        );
    }
}
