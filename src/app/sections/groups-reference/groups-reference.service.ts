import { Injectable } from '@angular/core';
import { OperationType } from '../../shared/constants/operation-type';
import { SortOrder } from '../../shared/constants/sort-order';
import { Observable } from 'rxjs';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { GroupsReferenceResponse } from './model/groups-reference-response';
import { GroupReferenceModel } from './model/groups-reference';

@Injectable()
export class GroupsReferenceService {
    constructor(private operationReferenceService: OperationTypeManagementService) {}

    getGroupsReferences(
        type: OperationType,
        sizeValue?: number,
        nameRegexp?: string,
        lastInListName?: string,
        sortOrder?: SortOrder,
        sortField?: string
    ): Observable<GroupsReferenceResponse> {
        return this.operationReferenceService.findGroupsReferenceService(type).findGroups({
            idRegexp: nameRegexp,
            lastId: lastInListName,
            size: sizeValue,
            sortOrder: sortOrder ? SortOrder[sortOrder] : SortOrder[SortOrder.ASC],
            sortFieldValue: sortField,
        });
    }

    deleteGroupsReference(type: OperationType, reference: GroupReferenceModel): Observable<string> {
        return this.operationReferenceService.findGroupsReferenceService(type).deleteGroupReference(reference);
    }

    saveGroupsReference(type: OperationType, references: GroupReferenceModel[]): Observable<string[]> {
        return this.operationReferenceService.findGroupsReferenceService(type).saveGroupReference(references);
    }
}
