import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/config.service';
import { Observable } from 'rxjs';
import { ParamsUtilService } from '../utils/params-util.service';
import { IGroupsService } from './igroups.service';
import { Group } from '../../../groups/model/group';

@Injectable({
    providedIn: 'root',
})
export class PaymentGroupsService implements IGroupsService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
        this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
    }

    findGroups(filterId: string): Observable<Group[]> {
        return this.http.get<Group[]>(`${this.fbManagementEndpoint}/group/filter/`, {
            params: filterId ? { id: filterId } : {},
        });
    }

    getGroupById(id: string): Observable<Group> {
        return this.http.get<Group>(`${this.fbManagementEndpoint}/group/${id}`);
    }

    deleteGroup(id: string): Observable<string> {
        return this.http.delete(`${this.fbManagementEndpoint}/group/${id}`, { responseType: 'text' });
    }

    saveGroup(group: Group): Observable<string> {
        return this.http.post(`${this.fbManagementEndpoint}/group`, group, { responseType: 'text' });
    }
}
