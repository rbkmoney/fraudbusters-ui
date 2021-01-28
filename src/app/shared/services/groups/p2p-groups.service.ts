import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { Group } from '../../../sections/groups/model/group';
import { HttpRequestModel } from '../../model/http-request-model';
import { filterParameters } from '../../utils/filter-params';
import { IGroupsService } from './igroups.service';

@Injectable()
export class P2pGroupsService implements IGroupsService {
    private readonly fbManagementEndpoint = this.configService.fbManagementEndpoint;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findGroups(filterId: string): Observable<Group[]> {
        return this.http.get<Group[]>(`${this.fbManagementEndpoint}/p2p/group/filter/`, {
            params: filterParameters({ id: filterId }),
        });
    }

    deleteGroup(id: string): Observable<string> {
        return this.http.delete(`${this.fbManagementEndpoint}/p2p/group/${id}`, { responseType: 'text' });
    }

    getGroupById(id: string): Observable<Group> {
        return this.http.get<Group>(`${this.fbManagementEndpoint}/p2p/group/${id}`);
    }

    saveGroup(group: Group): Observable<string> {
        return this.http.post<string>(`${this.fbManagementEndpoint}/p2p/group`, group, new HttpRequestModel());
    }
}
