import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../core/config.service';
import { Template } from '../../../sections/template/templates/model/template';
import { TemplatesResponse } from '../../../sections/template/templates/model/templates-response';
import { ValidateResponse } from '../../../sections/template/templates/model/validate-response';
import { ValidateTemplate } from '../../../sections/template/templates/model/validate-template';
import { HttpRequestModel } from '../../model/http-request-model';
import { SearchParams } from '../../model/search-params';
import { ParamsUtilService } from '../utils/params-util.service';
import { ITemplatesService } from './itemplates.service';

@Injectable()
export class PaymentTemplatesService implements ITemplatesService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
        this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
    }

    findTemplates(params?: SearchParams): Observable<TemplatesResponse> {
        return this.http.get<TemplatesResponse>(`${this.fbManagementEndpoint}/template/filter/`, {
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

    validateTemplates(templates: Template[]): Observable<ValidateResponse> {
        return this.http.post<ValidateResponse>(
            `${this.fbManagementEndpoint}/template/validate`,
            templates,
            new HttpRequestModel()
        );
    }
}
