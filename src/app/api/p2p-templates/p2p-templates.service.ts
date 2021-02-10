import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../config';
import { Template } from '../../sections/template/model/template';
import { ValidateResponse } from '../../sections/template/model/validate-response';
import { ValidateTemplate } from '../../sections/template/model/validate-template';
import { HttpRequestModel } from '../../shared/model/http-request-model';
import { HttpSearchResponse } from '../../shared/model/http-search-response';
import { SearchParams } from '../../shared/model/search-params';
import { filterParameters } from '../../shared/utils/filter-params';

@Injectable()
export class P2pTemplatesService {
    private readonly fbP2pTemplatesEndpoint = `${this.configService.fbManagementEndpoint}/p2p`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findTemplates(params?: SearchParams): Observable<HttpSearchResponse<Template>> {
        return this.http.get<HttpSearchResponse<Template>>(`${this.fbP2pTemplatesEndpoint}/template/filter/`, {
            params: filterParameters(params),
        });
    }

    deleteTemplate(id: string): Observable<string> {
        return this.http.delete<string>(`${this.fbP2pTemplatesEndpoint}/template/${id}`);
    }

    saveTemplate(template: Template): Observable<ValidateTemplate> {
        return this.http.post<ValidateTemplate>(
            `${this.fbP2pTemplatesEndpoint}/template`,
            template,
            new HttpRequestModel()
        );
    }

    getTemplatesName(nameRegexp: string): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbP2pTemplatesEndpoint}/template/names`, {
            params: filterParameters({ regexpName: nameRegexp }),
        });
    }

    validateTemplate(template: Template): Observable<ValidateResponse> {
        return this.http.post<ValidateResponse>(
            `${this.fbP2pTemplatesEndpoint}/template/validate`,
            template,
            new HttpRequestModel()
        );
    }
}
