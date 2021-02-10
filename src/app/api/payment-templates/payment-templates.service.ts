import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../config';
import { HttpRequestModel } from '../../shared/model/http-request-model';
import { HttpSearchResponse } from '../../shared/model/http-search-response';
import { SearchParams } from '../../shared/model/search-params';
import { filterParameters } from '../../shared/utils/filter-params';
import { CreateTemplateResponse } from '../fb-management/swagger-codegen/model/createTemplateResponse';
import { TemplateModel } from '../fb-management/swagger-codegen/model/templateModel';
import { ValidationResponse } from '../fb-management/swagger-codegen/model/validationResponse';

@Injectable()
export class PaymentTemplatesService {
    private readonly fbPaymentTemplatesEndpoint = `${this.configService.fbManagementEndpoint}/template`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findTemplates(params?: SearchParams): Observable<HttpSearchResponse<TemplateModel>> {
        return this.http.get<HttpSearchResponse<TemplateModel>>(`${this.fbPaymentTemplatesEndpoint}/filter/`, {
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

    saveTemplate(template: TemplateModel): Observable<CreateTemplateResponse> {
        return this.http.post<CreateTemplateResponse>(
            `${this.fbPaymentTemplatesEndpoint}`,
            template,
            new HttpRequestModel()
        );
    }

    validateTemplate(template: TemplateModel): Observable<ValidationResponse> {
        return this.http.post<ValidationResponse>(
            `${this.fbPaymentTemplatesEndpoint}/validate`,
            template,
            new HttpRequestModel()
        );
    }
}
