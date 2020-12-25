import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../core/config.service';
import { PaymentReference } from '../../../sections/references/model/payment-reference';
import { Reference } from '../../../sections/references/model/reference';
import { ReferencesResponse } from '../../../sections/references/model/references-response';
import { HttpRequestModel } from '../../model/http-request-model';
import { ParamsUtilService } from '../utils/params-util.service';
import { IReferencesService } from './ireferences.service';
import { SearchReferenceParams } from './model/search-reference-params';

@Injectable()
export class PaymentReferencesService implements IReferencesService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
        this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
    }

    findReferences(params?: SearchReferenceParams): Observable<ReferencesResponse> {
        return this.http.get<ReferencesResponse>(`${this.fbManagementEndpoint}/reference/filter/`, {
            params: this.paramsUtilService.filterParameters(params),
        });
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
