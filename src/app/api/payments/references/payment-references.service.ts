import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { HttpRequestModel } from '../../../shared/model/http-request-model';
import { filterParameters } from '../../../shared/utils/filter-params';
import { ReferencesResponse } from '../../fb-management/swagger-codegen/model/referencesResponse';
import { PaymentReference } from '../../fb-management/swagger-codegen/model/paymentReference';
import { SearchReferenceParams } from './search-reference-params';

@Injectable()
export class PaymentReferencesService {
    private readonly fbPaymentReferenceEndpoint = `${this.configService.fbManagementEndpoint}/payments-references`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findReferences(params?: SearchReferenceParams): Observable<ReferencesResponse> {
        return this.http.get<ReferencesResponse>(`${this.fbPaymentReferenceEndpoint}/filter`, {
            params: filterParameters(params),
        });
    }

    deleteReference(reference: PaymentReference): Observable<string> {
        return this.http.delete<string>(`${this.fbPaymentReferenceEndpoint}/${reference.id}`);
    }

    saveReferences(references: PaymentReference[]): Observable<string[]> {
        return this.http.post<string[]>(`${this.fbPaymentReferenceEndpoint}`, references, new HttpRequestModel());
    }
}
