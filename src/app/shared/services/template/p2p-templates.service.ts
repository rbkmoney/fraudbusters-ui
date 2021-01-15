import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { Template } from '../../../sections/templates/model/template';
import { TemplatesResponse } from '../../../sections/templates/model/templates-response';
import { ValidateResponse } from '../../../sections/templates/model/validate-response';
import { ValidateTemplate } from '../../../sections/templates/model/validate-template';
import { HttpRequestModel } from '../../model/http-request-model';
import { SearchParams } from '../../model/search-params';
import { ParamsUtilService } from '../utils/params-util.service';
import { ITemplatesService } from './itemplates.service';

@Injectable()
export class P2pTemplatesService implements ITemplatesService {
    private readonly fbManagementEndpoint = this.configService.fbManagementEndpoint;

    constructor(
        private http: HttpClient,
        private paramsUtilService: ParamsUtilService,
        private configService: ConfigService
    ) {}

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

    validateTemplate(template: Template): Observable<ValidateResponse> {
        return this.http.post<ValidateResponse>(
            `${this.fbManagementEndpoint}/p2p/template/validate`,
            template,
            new HttpRequestModel()
        );
    }
}
