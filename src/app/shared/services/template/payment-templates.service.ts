import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { Template } from '../../../sections/templates-old/model/template';
import { ValidateResponse } from '../../../sections/templates-old/model/validate-response';
import { ValidateTemplate } from '../../../sections/templates-old/model/validate-template';
import { HttpRequestModel } from '../../model/http-request-model';
import { HttpSearchResponse } from '../../model/http-search-response';
import { SearchParams } from '../../model/search-params';
import { filterParameters } from '../../utils/filter-params';
import { ITemplatesService } from './itemplates.service';

@Injectable()
export class PaymentTemplatesService implements ITemplatesService {
    private readonly fbManagementEndpoint = this.configService.fbManagementEndpoint;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findTemplates(params?: SearchParams): Observable<HttpSearchResponse<Template>> {
        return this.http.get<HttpSearchResponse<Template>>(`${this.fbManagementEndpoint}/template/filter/`, {
            params: filterParameters(params),
        });
    }

    deleteTemplate(id: string): Observable<string> {
        return this.http.delete<string>(`${this.fbManagementEndpoint}/template/${id}`);
    }

    getTemplatesName(nameRegexp?: string): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbManagementEndpoint}/template/names`, {
            params: filterParameters({ regexpName: nameRegexp + '%' }),
        });
    }

    saveTemplate(template: Template): Observable<ValidateTemplate> {
        return this.http.post<ValidateTemplate>(
            `${this.fbManagementEndpoint}/template`,
            template,
            new HttpRequestModel()
        );
    }

    validateTemplate(template: Template): Observable<ValidateResponse> {
        return this.http.post<ValidateResponse>(
            `${this.fbManagementEndpoint}/template/validate`,
            template,
            new HttpRequestModel()
        );
    }
}
