import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { OperationType } from '../../../../shared/constants/operation-type';
import { SortOrder } from '../../../../shared/constants/sort-order';
import { HttpSearchResponse } from '../../../../shared/model/http-search-response';
import { OperationTypeManagementService } from '../../../../shared/services/operation-type-management.service';
import { GroupReferenceModel } from '../../model/groups-reference';
import { P2pGroupReferenceModel } from '../../model/p2p-groups-reference';
import { PaymentGroupReferenceModel } from '../../model/payment-groups-reference';

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
    ): Observable<HttpSearchResponse<PaymentGroupReferenceModel | P2pGroupReferenceModel>> {
        return this.operationReferenceService.findGroupsReferenceService(type).findGroups({
            searchValue: nameRegexp,
            lastId: lastInListName,
            size: sizeValue,
            sortOrder: sortOrder ? sortOrder : SortOrder.ASC,
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
