import { Injectable } from '@angular/core';
import { ITemplatesService } from './itemplates.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/config.service';
import { Observable } from 'rxjs';
import { Template } from '../../../templates/model/template';
import { ParamsUtilService } from '../utils/params-util.service';
import { ValidateResponse } from '../../../templates/model/validate-response';
import { ValidateTemplate } from '../../../templates/model/validate-template';
import { TemplatesResponse } from '../../../templates/model/templates-response';
import { HttpRequestModel } from '../../model/http-request-model';
import { SearchParams } from '../../model/search-params';

@Injectable({
    providedIn: 'root',
})
export class P2pTemplatesService implements ITemplatesService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
        this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
    }

    findTemplates(params?: SearchParams): Observable<TemplatesResponse> {
        return this.http.get<TemplatesResponse>(`${this.fbManagementEndpoint}/p2p/template/filter/`, {
            params: this.paramsUtilService.filterParameters(params),
        });
    }

    deleteTemplate(id: string): Observable<string> {
        return this.http.delete<string>(`${this.fbManagementEndpoint}/p2p/template/${id}`);
    }

    saveTemplate(template: Template): Observable<ValidateTemplate> {
        return this.http.post<ValidateTemplate>(
            `${this.fbManagementEndpoint}/p2p/template`,
            template,
            new HttpRequestModel()
        );
    }

    getTemplatesName(nameRegexp: string): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbManagementEndpoint}/p2p/template/names`, {
            params: this.paramsUtilService.filterParameters({ regexpName: nameRegexp }),
        });
    }

    validateTemplates(templates: Template[]): Observable<ValidateResponse> {
        return this.http.post<ValidateResponse>(
            `${this.fbManagementEndpoint}/p2p/template/validate`,
            templates,
            new HttpRequestModel()
        );
    }
}
