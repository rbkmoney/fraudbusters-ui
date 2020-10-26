import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/config.service';
import { Observable } from 'rxjs';
import { ParamsUtilService } from '../utils/params-util.service';
import { IGroupsReferenceService } from './igroups-reference.service';
import { GroupsReferenceResponse } from '../../../groups-reference/model/groups-reference-response';
import { GroupReferenceModel } from '../../../groups-reference/model/groups-reference';
import { HttpRequestModel } from '../../model/HttpRequestModel';
import { SearchParams } from '../../model/SearchParams';

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

    deleteGroupReference(groupId: string, partyId: string, shopId: string): Observable<string> {
        return this.http.delete(`${this.fbManagementEndpoint}/p2p/group/${groupId}/reference`, {
            params: { shopId: shopId, partyId: partyId },
            responseType: 'text',
        });
    }

    saveGroupReference(groupId: string, groupReferenceModels: GroupReferenceModel[]): Observable<string[]> {
        return this.http.post<string[]>(
            `${this.fbManagementEndpoint}/p2p/group/${groupId}/reference`,
            groupReferenceModels,
            new HttpRequestModel()
        );
    }
}
