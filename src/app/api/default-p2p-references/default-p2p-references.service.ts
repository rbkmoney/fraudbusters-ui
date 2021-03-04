import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../config';
import { HttpSearchResponse } from '../../shared/model/http-search-response';
import { SearchParams } from '../../shared/model/search-params';
import { filterParameters } from '../../shared/utils/filter-params';
import { DefaultP2pReferenceModel } from '../fb-management/swagger-codegen/model/defaultP2pReferenceModel';
import { TemplateModel } from '../fb-management/swagger-codegen/model/templateModel';

@Injectable()
export class DefaultP2pReferencesService {
    private readonly endpoint = `${this.configService.fbManagementEndpoint}/p2p/reference/default`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findDefaultReferences(params?: SearchParams): Observable<HttpSearchResponse<DefaultP2pReferenceModel>> {
        return this.http.get<HttpSearchResponse<TemplateModel>>(`${this.endpoint}/filter/`, {
            params: filterParameters(params),
        });
    }
}
