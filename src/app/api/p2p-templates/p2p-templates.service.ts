import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../config';
import { HttpRequestModel } from '../../shared/model/http-request-model';
import { HttpSearchResponse } from '../../shared/model/http-search-response';
import { SearchParams } from '../../shared/model/search-params';
import { filterParameters } from '../../shared/utils/filter-params';
import { CreateTemplateResponse } from '../fb-management/swagger-codegen/model/createTemplateResponse';
import { TemplateModel } from '../fb-management/swagger-codegen/model/templateModel';
import { ValidationResponse } from '../fb-management/swagger-codegen/model/validationResponse';

@Injectable()
export class P2pTemplatesService {
    private readonly fbP2pTemplatesEndpoint = `${this.configService.fbManagementEndpoint}/p2p/template`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findTemplates(params?: SearchParams): Observable<HttpSearchResponse<TemplateModel>> {
        return this.http.get<HttpSearchResponse<TemplateModel>>(`${this.fbP2pTemplatesEndpoint}/filter/`, {
            params: filterParameters(params),
        });
    }

    deleteTemplate(id: string): Observable<string> {
        return this.http.delete<string>(`${this.fbP2pTemplatesEndpoint}/${id}`);
    }

    saveTemplate(template: TemplateModel): Observable<CreateTemplateResponse> {
        return this.http.post<CreateTemplateResponse>(
            `${this.fbP2pTemplatesEndpoint}`,
            template,
            new HttpRequestModel()
        );
    }

    getTemplatesName(nameRegexp: string): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbP2pTemplatesEndpoint}/names`, {
            params: filterParameters({ regexpName: nameRegexp }),
        });
    }

    validateTemplate(template: TemplateModel): Observable<ValidationResponse> {
        return this.http.post<ValidationResponse>(
            `${this.fbP2pTemplatesEndpoint}/validate`,
            template,
            new HttpRequestModel()
        );
    }
}
