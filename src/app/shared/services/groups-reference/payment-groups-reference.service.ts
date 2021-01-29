import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { GroupReferenceModel } from '../../../sections/groups-reference/model/groups-reference';
import { P2pGroupReferenceModel } from '../../../sections/groups-reference/model/p2p-groups-reference';
import { PaymentGroupReferenceModel } from '../../../sections/groups-reference/model/payment-groups-reference';
import { HttpRequestModel } from '../../model/http-request-model';
import { HttpSearchResponse } from '../../model/http-search-response';
import { SearchParams } from '../../model/search-params';
import { filterParameters } from '../../utils/filter-params';
import { IGroupsReferenceService } from './igroups-reference.service';

@Injectable()
export class PaymentGroupsReferenceService implements IGroupsReferenceService {
    private readonly fbManagementEndpoint = this.configService.fbManagementEndpoint;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findGroups(
        params?: SearchParams
    ): Observable<HttpSearchResponse<PaymentGroupReferenceModel | P2pGroupReferenceModel>> {
        return this.http.get<HttpSearchResponse<PaymentGroupReferenceModel | P2pGroupReferenceModel>>(
            `${this.fbManagementEndpoint}/group/reference/filter`,
            {
                params: filterParameters(params),
            }
        );
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
