import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { Group } from '../../../sections/groups/model/group';
import { IGroupsService } from './igroups.service';

@Injectable()
export class PaymentGroupsService implements IGroupsService {
    private readonly fbManagementEndpoint = this.configService.fbManagementEndpoint;

    constructor(private http: HttpClient, private configService: ConfigService) {}

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
