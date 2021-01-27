import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { Template } from '../../../sections/templates/model/template';
import { ValidateResponse } from '../../../sections/templates/model/validate-response';
import { ValidateTemplate } from '../../../sections/templates/model/validate-template';
import { HttpRequestModel } from '../../model/http-request-model';
import { HttpSearchResponse } from '../../model/http-search-response';
import { SearchParams } from '../../model/search-params';
import { ParamsUtilService } from '../utils/params-util.service';
import { ITemplatesService } from './itemplates.service';

@Injectable()
export class PaymentTemplatesService implements ITemplatesService {
    private readonly fbManagementEndpoint = this.configService.fbManagementEndpoint;

    constructor(
        private http: HttpClient,
        private paramsUtilService: ParamsUtilService,
        private configService: ConfigService
    ) {}

    findTemplates(params?: SearchParams): Observable<HttpSearchResponse<Template>> {
        return this.http.get<HttpSearchResponse<Template>>(`${this.fbManagementEndpoint}/template/filter/`, {
            params: this.paramsUtilService.filterParameters(params),
        });
    }

    deleteTemplate(id: string): Observable<string> {
        return this.http.delete<string>(`${this.fbManagementEndpoint}/template/${id}`);
    }

    getTemplatesName(nameRegexp?: string): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbManagementEndpoint}/template/names`, {
            params: this.paramsUtilService.filterParameters({ regexpName: nameRegexp + '%' }),
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
