import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { OperationType } from '../../shared/constants/operation-type';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { Group } from './model/group';

@Injectable()
export class GroupsService {
    constructor(private operationTypeManagementService: OperationTypeManagementService) {}

    getGroups(type: OperationType, nameRegexp?: string): Observable<Group[]> {
        return this.operationTypeManagementService.findGroupService(type).findGroups(nameRegexp);
    }

    getGroupById(type: OperationType, nameRegexp: string): Observable<Group> {
        return this.operationTypeManagementService.findGroupService(type).getGroupById(nameRegexp);
    }

    deleteGroup(type: OperationType, id: string): Observable<string> {
        return this.operationTypeManagementService.findGroupService(type).deleteGroup(id);
    }

    saveGroup(type: OperationType, group: Group): Observable<string> {
        return this.operationTypeManagementService.findGroupService(type).saveGroup(group);
    }
}
