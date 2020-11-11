import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/config.service';
import { Observable } from 'rxjs';
import { ParamsUtilService } from '../utils/params-util.service';
import { IGroupsReferenceService } from './igroups-reference.service';
import { GroupReferenceModel } from '../../../sections/groups-reference/model/groups-reference';
import { GroupsReferenceResponse } from '../../../sections/groups-reference/model/groups-reference-response';
import { HttpRequestModel } from '../../model/http-request-model';
import { SearchParams } from '../../model/search-params';
import { PaymentGroupReferenceModel } from '../../../sections/groups-reference/model/payment-groups-reference';

@Injectable()
export class PaymentGroupsReferenceService implements IGroupsReferenceService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
        this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
    }

    findGroups(params?: SearchParams): Observable<GroupsReferenceResponse> {
        return this.http.get<GroupsReferenceResponse>(`${this.fbManagementEndpoint}/group/reference/filter`, {
            params: this.paramsUtilService.filterParameters(params),
        });
    }

    deleteGroupReference(reference: PaymentGroupReferenceModel): Observable<string> {
        return this.http.delete(`${this.fbManagementEndpoint}/group/${reference.groupId}/reference`, {
            params: { partyId: reference.partyId, shopId: reference.shopId },
            responseType: 'text',
        });
    }

    saveGroupReference(groupReferenceModels: GroupReferenceModel[]): Observable<string[]> {
        return this.http.post<string[]>(
            `${this.fbManagementEndpoint}/group/${groupReferenceModels[0].groupId}/reference`,
            groupReferenceModels,
            new HttpRequestModel()
        );
    }
}
