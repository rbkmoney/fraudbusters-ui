import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { P2pReferenceModel } from '../../../api/fb-management/swagger-codegen/model/p2pReferenceModel';
import { ConfigService } from '../../../config';
import { ReferenceModule } from '../../../sections/reference';
import { HttpRequestModel } from '../../model/http-request-model';
import { HttpSearchResponse } from '../../model/http-search-response';
import { filterParameters } from '../../utils/filter-params';
import { IReferencesService } from './ireferences.service';
import { SearchReferenceParams } from './model/search-reference-params';

@Injectable()
export class P2pReferencesService implements IReferencesService {
    private readonly fbManagementEndpoint = this.configService.fbManagementEndpoint;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findReferences(params?: SearchReferenceParams): Observable<HttpSearchResponse<P2pReferenceModel>> {
        return this.http.get<HttpSearchResponse<P2pReferenceModel>>(
            `${this.fbManagementEndpoint}/p2p/reference/filter/`,
            {
                params: filterParameters(params),
            }
        );
    }

    deleteReference(reference: P2pReferenceModel): Observable<string> {
        return this.http.delete(`${this.fbManagementEndpoint}/p2p/template/${reference.templateId}/reference`, {
            params: { identityId: reference.identityId },
            responseType: 'text',
        });
    }

    saveReferences(references: ReferenceModule[]): Observable<string[]> {
        return this.http.post<string[]>(
            `${this.fbManagementEndpoint}/p2p/template/references`,
            references,
            new HttpRequestModel()
        );
    }
}
