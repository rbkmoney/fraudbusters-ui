import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/config.service';
import { Observable } from 'rxjs';
import { SearchReferenceParams } from './model/SearchReferenceParams';
import { ParamsUtilService } from '../utils/params-util.service';
import { ReferencesResponse } from '../../../references/model/references-response';
import { PaymentReference } from '../../../references/model/payment-reference';
import { Reference } from '../../../references/model/reference';
import { IGroupsReferenceService } from './igroups-reference.service';
import { GroupReferenceModel } from '../../../groups-reference/model/groups-reference';

@Injectable({
    providedIn: 'root',
})
export class PaymentGroupsReferenceService implements IGroupsReferenceService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
        this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
    }

    findGroups(params?: SearchReferenceParams): Observable<GroupReferenceModel[]> {
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

    saveReference(reference: Reference): Observable<string> {
        return this.http.post(`${this.fbManagementEndpoint}/template/${reference.templateId}/reference`, reference, {
            responseType: 'text',
        });
    }
}
