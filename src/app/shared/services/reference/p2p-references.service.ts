import { Injectable } from '@angular/core';
import { IReferencesService } from './ireferences.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/config.service';
import { SearchReferenceParams } from './model/SearchReferenceParams';
import { Observable } from 'rxjs';
import { P2pReference, Reference } from '../../../references/model/reference';
import { ParamsUtilService } from '../utils/params-util.service';
import { ReferencesResponse } from '../../../references/model/references-response';
import { HttpRequestModel } from '../../model/HttpRequestModel';

@Injectable({
    providedIn: 'root',
})
export class P2pReferencesService implements IReferencesService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
        this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
    }

    findReferences(params?: SearchReferenceParams): Observable<ReferencesResponse> {
        return this.http.get<ReferencesResponse>(`${this.fbManagementEndpoint}/p2p/reference/filter/`, {
            params: this.paramsUtilService.filterParameters(params),
        });
    }

    deleteReference(reference: P2pReference): Observable<string> {
        return this.http.delete<string>(`${this.fbManagementEndpoint}/p2p/template/${reference.templateId}/reference`, {
            params: { identityId: reference.identityId },
        });
    }

    saveReference(reference: Reference): Observable<string> {
        return this.http.post<string>(
            `${this.fbManagementEndpoint}/p2p/template/${reference.templateId}/reference`,
            reference,
            new HttpRequestModel()
        );
    }
}
