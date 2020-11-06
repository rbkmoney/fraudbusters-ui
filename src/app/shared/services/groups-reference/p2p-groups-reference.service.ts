import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/config.service';
import { Observable } from 'rxjs';
import { ParamsUtilService } from '../utils/params-util.service';
import { IGroupsReferenceService } from './igroups-reference.service';
import { GroupsReferenceResponse } from '../../../sections/groups-reference/model/groups-reference-response';
import { GroupReferenceModel } from '../../../sections/groups-reference/model/groups-reference';
import { HttpRequestModel } from '../../model/http-request-model';
import { SearchParams } from '../../model/search-params';
import { P2pGroupReferenceModel } from '../../../sections/groups-reference/model/p2p-groups-reference';

@Injectable({
    providedIn: 'root',
})
export class P2pGroupsReferenceService implements IGroupsReferenceService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
        this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
    }

    findGroups(params?: SearchParams): Observable<GroupsReferenceResponse> {
        return this.http.get<GroupsReferenceResponse>(`${this.fbManagementEndpoint}/p2p/group/reference/filter`, {
            params: this.paramsUtilService.filterParameters(params),
        });
    }

    deleteGroupReference(reference: P2pGroupReferenceModel): Observable<string> {
        return this.http.delete(`${this.fbManagementEndpoint}/p2p/group/${reference.groupId}/reference`, {
            params: { identityId: reference.identityId },
            responseType: 'text',
        });
    }

    saveGroupReference(groupReferenceModels: GroupReferenceModel[]): Observable<string[]> {
        return this.http.post<string[]>(
            `${this.fbManagementEndpoint}/p2p/group/${groupReferenceModels[0].groupId}/reference`,
            groupReferenceModels,
            new HttpRequestModel()
        );
    }
}
