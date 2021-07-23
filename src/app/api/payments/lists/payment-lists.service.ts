import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ConfigService } from '../../../config';
import { ListType } from '../../../shared/constants/list-type';
import { HttpRequestModel } from '../../../shared/model/http-request-model';
import { filterParameters } from '../../../shared/utils/filter-params';
import { ListResponse } from '../../fb-management/swagger-codegen/model/listResponse';
import { PaymentCountInfo } from '../../fb-management/swagger-codegen/model/paymentCountInfo';
import { WbListRecordsResponse } from '../../fb-management/swagger-codegen/model/wbListRecordsResponse';
import { SearchListsParams } from './search-lists-params';

@Injectable()
export class PaymentListsService {
    private readonly fbPaymentReferenceEndpoint = `${this.configService.fbManagementEndpoint}/payments-lists`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    deleteListRow(id: string): Observable<string> {
        return this.http.delete(`${this.fbPaymentReferenceEndpoint}/${id}`, {
            responseType: 'text',
        });
    }

    findListRows(params: SearchListsParams): Observable<WbListRecordsResponse> {
        return this.http.get<WbListRecordsResponse>(`${this.fbPaymentReferenceEndpoint}/filter`, {
            params: filterParameters(params),
        });
    }

    getNames(listTypeSearch: ListType): Observable<string[]> {
        return this.http
            .get<ListResponse>(`${this.fbPaymentReferenceEndpoint}/currentListNames`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                params: { listType: listTypeSearch },
            })
            .pipe(map((response: ListResponse) => response.result));
    }

    getAvailableListNames(): Observable<string[]> {
        return this.http
            .get<ListResponse>(`${this.fbPaymentReferenceEndpoint}/availableListNames`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .pipe(map((response: ListResponse) => response.result));
    }

    saveListsRows(listType: ListType, records: PaymentCountInfo[]): Observable<string[]> {
        return this.http.post<string[]>(
            `${this.fbPaymentReferenceEndpoint}`,
            { listType, records },
            new HttpRequestModel()
        );
    }

    saveListsRowsFromFile(listType: ListType, file: File): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post<any>(`${this.fbPaymentReferenceEndpoint}/csv`, formData, {
            reportProgress: true,
            observe: 'events',
        });
    }
}
