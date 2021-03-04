import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../config';
import { HttpSearchResponse } from '../../shared/model/http-search-response';
import { SearchParams } from '../../shared/model/search-params';
import { filterParameters } from '../../shared/utils/filter-params';
import { DefaultPaymentReferenceModel } from '../fb-management/swagger-codegen/model/defaultPaymentReferenceModel';
import { TemplateModel } from '../fb-management/swagger-codegen/model/templateModel';

@Injectable()
export class DefaultPaymentReferencesService {
    private readonly endpoint = `${this.configService.fbManagementEndpoint}/reference/default`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findDefaultReferences(params?: SearchParams): Observable<HttpSearchResponse<DefaultPaymentReferenceModel>> {
        return this.http.get<HttpSearchResponse<TemplateModel>>(`${this.endpoint}/filter/`, {
            params: filterParameters(params),
        });
    }
}
