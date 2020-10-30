import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/config.service';
import { Observable } from 'rxjs';
import { ParamsUtilService } from '../utils/params-util.service';
import { IGroupsService } from './igroups.service';
import { Group } from '../../../groups/model/group';
import { HttpRequestModel } from '../../model/http-request-model';

@Injectable({
    providedIn: 'root',
})
export class P2pGroupsService implements IGroupsService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
        this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
    }

    findGroups(filterId: string): Observable<Group[]> {
        return this.http.get<Group[]>(`${this.fbManagementEndpoint}/p2p/group/filter/`, {
            params: this.paramsUtilService.filterParameters({ id: filterId }),
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
