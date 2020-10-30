import { Injectable } from '@angular/core';
import { ITemplatesService } from './itemplates.service';
import { Template } from '../../../templates/model/template';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/config.service';
import { Observable } from 'rxjs';
import { ParamsUtilService } from '../utils/params-util.service';
import { ValidateTemplate } from '../../../templates/model/validate-template';
import { ValidateResponse } from '../../../templates/model/validate-response';
import { TemplatesResponse } from '../../../templates/model/templates-response';
import { HttpRequestModel } from '../../model/http-request-model';
import { SearchParams } from '../../model/search-params';

@Injectable({
    providedIn: 'root',
})
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
