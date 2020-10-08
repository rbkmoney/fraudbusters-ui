import { Injectable } from '@angular/core';
import { ITemplatesService } from './itemplates.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../../../core/config.service';
import { SearchTemplateParams } from './model/SearchTemplateParams';
import { Observable } from 'rxjs';
import { Template } from '../../../templates/model/template';
import { ParamsUtilService } from '../utils/params-util.service';
import { ValidateResponse } from '../../../templates/model/validate-response';
import { ValidateTemplate } from '../../../templates/model/validate-template';

@Injectable({
    providedIn: 'root',
})
export class P2pTemplatesService implements ITemplatesService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
        this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
    }

    findTemplates(params?: SearchTemplateParams): Observable<Template[]> {
        return this.http.get<Template[]>(`${this.fbManagementEndpoint}/p2p/template/filter/`, {
            params: this.paramsUtilService.filterParameters(params),
        });
    }

    deleteTemplate(template: Template): Observable<string> {
        return this.http.delete<string>(
            `${this.fbManagementEndpoint}/p2p/template/`,
            this.paramsUtilService.initHttpRequestWithBody(template)
        );
    }

    saveTemplate(template: Template): Observable<ValidateTemplate> {
        return this.http.post<ValidateTemplate>(
            `${this.fbManagementEndpoint}/p2p/template`,
            this.paramsUtilService.initHttpRequestWithBody(template)
        );
    }

    validateTemplates(templates: Template[]): Observable<ValidateResponse> {
        return this.http.post<ValidateResponse>(
            `${this.fbManagementEndpoint}/p2p/validateTemplate`,
            this.paramsUtilService.initHttpRequestWithBody(templates)
        );
    }
}
