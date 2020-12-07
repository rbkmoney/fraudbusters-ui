import { Observable, of } from 'rxjs';
import { SearchAuditParams } from './model/search-audit-params';
import { AuditResponse } from '../../../sections/references/model/audit-response';
import { Injectable } from '@angular/core';
import { IAuditService } from './iaudit.service';
import { TemplatesResponse } from '../../../sections/templates/model/templates-response';
import { HttpClient } from '@angular/common/http';
import { ParamsUtilService } from '../utils/params-util.service';
import { ConfigService } from '../../../core/config.service';

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
