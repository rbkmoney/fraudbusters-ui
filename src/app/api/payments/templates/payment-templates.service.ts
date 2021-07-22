import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ConfigService } from '../../../config';
import { HttpRequestModel } from '../../../shared/model/http-request-model';
import { HttpSearchResponse } from '../../../shared/model/http-search-response';
import { SearchParams } from '../../../shared/model/search-params';
import { filterParameters } from '../../../shared/utils/filter-params';
import { CreateTemplateResponse } from '../../fb-management/swagger-codegen/model/createTemplateResponse';
import { ListResponse } from '../../fb-management/swagger-codegen/model/listResponse';
import { Template } from '../../fb-management/swagger-codegen/model/template';
import { TemplatesResponse } from '../../fb-management/swagger-codegen/model/templatesResponse';
import { ValidationResponse } from '../../fb-management/swagger-codegen/model/validationResponse';

@Injectable()
export class PaymentTemplatesService {
    private readonly fbPaymentTemplatesEndpoint = `${this.configService.fbManagementEndpoint}/payments-templates`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findTemplates(params?: SearchParams): Observable<TemplatesResponse> {
        return this.http.get<HttpSearchResponse<Template>>(`${this.fbPaymentTemplatesEndpoint}/filter`, {
            params: filterParameters(params),
        });
    }

    deleteTemplate(id: string): Observable<string> {
        return this.http.delete<string>(`${this.fbPaymentTemplatesEndpoint}/${id}`);
    }

    getTemplatesName(nameRegexp?: string): Observable<string[]> {
        return this.http
            .get<ListResponse>(`${this.fbPaymentTemplatesEndpoint}/names`, {
                params: filterParameters({ regexpName: nameRegexp + '%' }),
            })
            .pipe(map((response: ListResponse) => response.result));
    }

    saveTemplate(template: Template): Observable<CreateTemplateResponse> {
        return this.http.post<CreateTemplateResponse>(
            `${this.fbPaymentTemplatesEndpoint}`,
            template,
            new HttpRequestModel()
        );
    }

    validateTemplate(template: Template): Observable<ValidationResponse> {
        return this.http.post<ValidationResponse>(
            `${this.fbPaymentTemplatesEndpoint}/validate`,
            template,
            new HttpRequestModel()
        );
    }
}
