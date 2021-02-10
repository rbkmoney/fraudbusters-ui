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
export class PaymentTemplatesService {
    private readonly fbPaymentTemplatesEndpoint = `${this.configService.fbManagementEndpoint}/template`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findTemplates(params?: SearchParams): Observable<HttpSearchResponse<Template>> {
        return this.http.get<HttpSearchResponse<Template>>(`${this.fbPaymentTemplatesEndpoint}/filter/`, {
            params: filterParameters(params),
        });
    }

    deleteTemplate(id: string): Observable<string> {
        return this.http.delete<string>(`${this.fbPaymentTemplatesEndpoint}/${id}`);
    }

    getTemplatesName(nameRegexp?: string): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbPaymentTemplatesEndpoint}/names`, {
            params: filterParameters({ regexpName: nameRegexp + '%' }),
        });
    }

    saveTemplate(template: Template): Observable<ValidateTemplate> {
        return this.http.post<ValidateTemplate>(`${this.fbPaymentTemplatesEndpoint}`, template, new HttpRequestModel());
    }

    validateTemplate(template: Template): Observable<ValidateResponse> {
        return this.http.post<ValidateResponse>(
            `${this.fbPaymentTemplatesEndpoint}/validate`,
            template,
            new HttpRequestModel()
        );
    }
}
