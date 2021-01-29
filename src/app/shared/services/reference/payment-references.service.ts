import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { P2pReference } from '../../../sections/reference/model/p2p-reference';
import { PaymentReference } from '../../../sections/reference/model/payment-reference';
import { Reference } from '../../../sections/reference/model/reference';
import { HttpRequestModel } from '../../model/http-request-model';
import { HttpSearchResponse } from '../../model/http-search-response';
import { filterParameters } from '../../utils/filter-params';
import { IReferencesService } from './ireferences.service';
import { SearchReferenceParams } from './model/search-reference-params';

@Injectable()
export class PaymentReferencesService implements IReferencesService {
    private readonly fbManagementEndpoint = this.configService.fbManagementEndpoint;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findReferences(params?: SearchReferenceParams): Observable<HttpSearchResponse<PaymentReference | P2pReference>> {
        return this.http.get<HttpSearchResponse<PaymentReference | P2pReference>>(
            `${this.fbManagementEndpoint}/reference/filter/`,
            {
                params: filterParameters(params),
            }
        );
    }

    deleteReference(reference: PaymentReference): Observable<string> {
        return this.http.delete(`${this.fbManagementEndpoint}/template/${reference.templateId}/reference`, {
            params: { shopId: reference.shopId, partyId: reference.partyId },
            responseType: 'text',
        });
    }

    saveReferences(references: Reference[]): Observable<string[]> {
        return this.http.post<string[]>(
            `${this.fbManagementEndpoint}/template/references`,
            references,
            new HttpRequestModel()
        );
    }
}
