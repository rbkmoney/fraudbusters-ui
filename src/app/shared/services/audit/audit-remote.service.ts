import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { Log } from '../../../sections/audit/model/log';
import { HttpSearchResponse } from '../../model/http-search-response';
import { ParamsUtilService } from '../utils/params-util.service';
import { IAuditService } from './iaudit.service';
import { SearchAuditParams } from './model/search-audit-params';

@Injectable()
export class AuditRemoteService implements IAuditService {
    private readonly fbManagementEndpoint = this.configService.fbManagementEndpoint;

    constructor(
        private http: HttpClient,
        private paramsUtilService: ParamsUtilService,
        private configService: ConfigService
    ) {}

    getObjectTypes(): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbManagementEndpoint}/audit/objectTypes`);
    }

    getCommandTypes(): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbManagementEndpoint}/audit/commandTypes`);
    }

    findLogs(params?: SearchAuditParams): Observable<HttpSearchResponse<Log>> {
        return this.http.get<HttpSearchResponse<Log>>(`${this.fbManagementEndpoint}/audit/filter`, {
            params: this.paramsUtilService.filterParameters(params),
        });
    }
}
