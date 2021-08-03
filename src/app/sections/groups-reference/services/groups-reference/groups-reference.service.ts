import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GroupReference } from '../../../../api/fb-management/swagger-codegen/model/groupReference';
import { GroupsReferencesResponse } from '../../../../api/fb-management/swagger-codegen/model/groupsReferencesResponse';
import { PaymentGroupsReferencesService } from '../../../../api/payments/groups-references';
import { OperationType } from '../../../../shared/constants/operation-type';
import { SortOrder } from '../../../../shared/constants/sort-order';

@Injectable()
export class GroupsReferenceService {
    constructor(private paymentGroupsReferencesService: PaymentGroupsReferencesService) {}

    getGroupsReferences(
        type: OperationType,
        sizeValue?: number,
        nameRegexp?: string,
        lastInListName?: string,
        sortOrder?: SortOrder,
        sortField?: string
    ): Observable<GroupsReferencesResponse> {
        return this.paymentGroupsReferencesService.filter({
            searchValue: nameRegexp,
            lastId: lastInListName,
            size: sizeValue,
            sortOrder: sortOrder ? sortOrder : SortOrder.ASC,
            sortFieldValue: sortField,
        });
    }

    deleteGroupsReference(type: OperationType, reference: GroupReference): Observable<string> {
        return this.paymentGroupsReferencesService.deleteGroupReference(reference);
    }

    saveGroupsReference(type: OperationType, references: GroupReference[]): Observable<string[]> {
        return this.paymentGroupsReferencesService.saveGroupReference(references);
    }
}
