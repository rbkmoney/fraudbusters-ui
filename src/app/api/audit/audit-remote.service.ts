import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { filterParameters } from '../../shared/utils/filter-params';
import { ConfigService } from '../../config';
import { FilterLogsResponse } from '../fb-management/swagger-codegen/model/filterLogsResponse';
import { ListResponse } from '../fb-management/swagger-codegen/model/listResponse';
import { map } from 'rxjs/operators';
import { SearchAuditParams } from './searchAuditParams';

@Injectable()
export class AuditRemoteService {
    private readonly fbPaymentReferenceEndpoint = `${this.configService.fbManagementEndpoint}/audit`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    getObjectTypes(): Observable<Array<string>> {
        return this.http
            .get<ListResponse>(`${this.fbPaymentReferenceEndpoint}/objectTypes`)
            .pipe(map((response: ListResponse) => response.result));
    }

    getCommandTypes(): Observable<Array<string>> {
        return this.http
            .get<ListResponse>(`${this.fbPaymentReferenceEndpoint}/commandTypes`)
            .pipe(map((response: ListResponse) => response.result));
    }

    findLogs(params?: SearchAuditParams): Observable<FilterLogsResponse> {
        return this.http.get<FilterLogsResponse>(`${this.fbPaymentReferenceEndpoint}/filter`, {
            params: filterParameters(params),
        });
    }
}
