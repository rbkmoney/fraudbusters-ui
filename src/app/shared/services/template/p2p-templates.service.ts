import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { Template } from '../../../sections/template/types/template';
import { ValidateResponse } from '../../../sections/template/types/validate-response';
import { ValidateTemplate } from '../../../sections/template/types/validate-template';
import { HttpRequestModel } from '../../model/http-request-model';
import { HttpSearchResponse } from '../../model/http-search-response';
import { SearchParams } from '../../model/search-params';
import { filterParameters } from '../../utils/filter-params';
import { ITemplatesService } from './itemplates.service';

@Injectable()
export class P2pTemplatesService implements ITemplatesService {
    private readonly fbManagementEndpoint = this.configService.fbManagementEndpoint;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findTemplates(params?: SearchParams): Observable<HttpSearchResponse<Template>> {
        return this.http.get<HttpSearchResponse<Template>>(`${this.fbManagementEndpoint}/p2p/template/filter/`, {
            params: filterParameters(params),
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
            params: filterParameters({ regexpName: nameRegexp }),
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
