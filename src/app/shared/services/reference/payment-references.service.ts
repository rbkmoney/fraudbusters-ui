import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PaymentReferenceModel } from '../../../api/fb-management/swagger-codegen/model/paymentReferenceModel';
import { ConfigService } from '../../../config';
import { HttpRequestModel } from '../../model/http-request-model';
import { HttpSearchResponse } from '../../model/http-search-response';
import { filterParameters } from '../../utils/filter-params';
import { IReferencesService } from './ireferences.service';
import { SearchReferenceParams } from './model/search-reference-params';
import { SearchParams } from '../../model/search-params';
import { DefaultPaymentReferenceModel } from '../../../api/fb-management/swagger-codegen/model/defaultPaymentReferenceModel';
import { TemplateModel } from '../../../api/fb-management/swagger-codegen/model/templateModel';

@Injectable()
export class PaymentReferencesService implements IReferencesService {
    private readonly fbManagementEndpoint = this.configService.fbManagementEndpoint;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findReferences(params?: SearchReferenceParams): Observable<HttpSearchResponse<PaymentReferenceModel>> {
        return this.http.get<HttpSearchResponse<PaymentReferenceModel>>(
            `${this.fbManagementEndpoint}/reference/filter/`,
            {
                params: filterParameters(params),
            }
        );
    }

    deleteReference(reference: PaymentReferenceModel): Observable<string> {
        return this.http.delete<string>(
            `${this.fbManagementEndpoint}/template/${reference.templateId}/reference/${reference.id}`
        );
    }

    saveReferences(references: PaymentReferenceModel[]): Observable<string[]> {
        return this.http.post<string[]>(
            `${this.fbManagementEndpoint}/template/references`,
            references,
            new HttpRequestModel()
        );
    }

    findDefaultReferences(params?: SearchParams): Observable<HttpSearchResponse<DefaultPaymentReferenceModel>> {
        return this.http.get<HttpSearchResponse<TemplateModel>>(
            `${this.fbManagementEndpoint}/reference/default/filter/`,
            {
                params: filterParameters(params),
            }
        );
    }
}
