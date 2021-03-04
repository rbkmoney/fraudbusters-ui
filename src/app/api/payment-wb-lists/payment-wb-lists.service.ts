import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../config';
import { HttpRequestModel } from '../../shared/model/http-request-model';
import { SearchListParams } from '../../shared/model/search-list-params';
import { filterParameters } from '../../shared/utils/filter-params';
import { FilterResponseWbListRecords } from '../fb-management/swagger-codegen/model/filterResponseWbListRecords';
import { PaymentCountInfo } from '../fb-management/swagger-codegen/model/paymentCountInfo';
import { WbListRecords } from '../fb-management/swagger-codegen/model/wbListRecords';
import ListTypeEnum = WbListRecords.ListTypeEnum;

@Injectable()
export class PaymentWbListsService {
    private readonly endpoint = `${this.configService.fbManagementEndpoint}/lists`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    deleteListRecord(id: string): Observable<string> {
        return this.http.delete(`${this.endpoint}/${id}`, {
            responseType: 'text',
        });
    }

    findListRows(params: SearchListParams): Observable<FilterResponseWbListRecords> {
        return this.http.get<FilterResponseWbListRecords>(`${this.endpoint}/filter`, {
            params: filterParameters(params),
        });
    }

    getNames(listTypeSearch: ListTypeEnum): Observable<string[]> {
        return this.http.get<string[]>(`${this.endpoint}/names`, {
            params: { listType: listTypeSearch },
        });
    }

    getAvailableListNames(): Observable<string[]> {
        return this.http.get<string[]>(`${this.endpoint}/availableListNames`);
    }

    saveListsRows(listType: ListTypeEnum, records: PaymentCountInfo[]): Observable<string[]> {
        return this.http.post<string[]>(`${this.endpoint}`, { listType, records }, new HttpRequestModel());
    }
}
