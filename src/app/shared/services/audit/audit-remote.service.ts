import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../core/config.service';
import { AuditResponse } from '../../../sections/references/model/audit-response';
import { ParamsUtilService } from '../utils/params-util.service';
import { IAuditService } from './iaudit.service';
import { SearchAuditParams } from './model/search-audit-params';

@Injectable()
export class AuditRemoteService implements IAuditService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
        this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
    }

    getObjectTypes(): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbManagementEndpoint}/audit/objectTypes`);
    }

    getCommandTypes(): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbManagementEndpoint}/audit/commandTypes`);
    }

    findLogs(params?: SearchAuditParams): Observable<AuditResponse> {
        return this.http.get<AuditResponse>(`${this.fbManagementEndpoint}/audit/filter`, {
            params: this.paramsUtilService.filterParameters(params),
        });
    }
}
