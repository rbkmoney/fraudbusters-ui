import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ConfigService } from '../../../config';
import { HttpRequestModel } from '../../../shared/model/http-request-model';
import { SearchParams } from '../../../shared/model/search-params';
import { filterParameters } from '../../../shared/utils/filter-params';
import { GroupReference } from '../../fb-management/swagger-codegen/model/groupReference';
import { GroupsReferencesResponse } from '../../fb-management/swagger-codegen/model/groupsReferencesResponse';
import { ListResponse } from '../../fb-management/swagger-codegen/model/listResponse';

@Injectable()
export class PaymentGroupsReferencesService {
    private readonly fbPaymentReferenceEndpoint = `${this.configService.fbManagementEndpoint}/payments-groups`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    filter(params?: SearchParams): Observable<GroupsReferencesResponse> {
        return this.http.get<GroupsReferencesResponse>(`${this.fbPaymentReferenceEndpoint}/references/filter`, {
            params: filterParameters(params),
        });
    }

    deleteGroupReference(reference: GroupReference): Observable<string> {
        return this.http.delete(`${this.fbPaymentReferenceEndpoint}/${reference.groupId}/references/remove`, {
            params: { partyId: reference.partyId, shopId: reference.shopId, groupId: reference.groupId },
            responseType: 'text',
        });
    }

    saveGroupReference(groupReferenceModels: GroupReference[]): Observable<string[]> {
        return this.http
            .post<ListResponse>(
                `${this.fbPaymentReferenceEndpoint}/${groupReferenceModels[0].groupId}/references`,
                groupReferenceModels,
                new HttpRequestModel()
            )
            .pipe(map((response: ListResponse) => response.result));
    }
}
