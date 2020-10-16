import { Injectable } from '@angular/core';
import { ITemplatesService } from './itemplates.service';
import { Template } from '../../../templates/model/template';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/config.service';
import { Observable } from 'rxjs';
import { SearchTemplateParams } from './model/SearchTemplateParams';
import { ParamsUtilService } from '../utils/params-util.service';
import { ValidateTemplate } from '../../../templates/model/validate-template';
import { ValidateResponse } from '../../../templates/model/validate-response';
import { TemplatesResponse } from '../../../templates/model/templates-response';
import { IGroupsService } from './igroups.service';
import { Group } from '../../../groups/model/group';

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
        return this.http.delete<string>(`${this.fbManagementEndpoint}/p2p/group/${id}`);
    }

    getGroupById(id: string): Observable<Group> {
        return this.http.get<Group>(`${this.fbManagementEndpoint}/p2p/group/${id}`);
    }

    saveGroup(group: Group): Observable<string> {
        return this.http.post<string>(
            `${this.fbManagementEndpoint}/p2p/group`,
            this.paramsUtilService.initHttpRequestWithBody(group)
        );
    }
}
