import { Injectable } from '@angular/core';
import { Reference } from './model/reference';
import { OperationType } from '../../shared/constants/operation-type';
import { Observable } from 'rxjs';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { SortOrder } from '../../shared/constants/sort-order';
import { ReferencesResponse } from './model/references-response';

@Injectable()
export class ReferencesService {
    constructor(private operationReferenceService: OperationTypeManagementService) {}

    getReferences(
        type: OperationType,
        sizeValue?: number,
        nameRegexp?: string,
        lastInListName?: string,
        sortOrder?: SortOrder,
        isGlobalValue?: boolean,
        isDefaultValue?: boolean,
        sortField?: string
    ): Observable<ReferencesResponse> {
        return this.operationReferenceService.findReferenceService(type).findReferences({
            searchValue: nameRegexp,
            lastId: lastInListName,
            size: sizeValue,
            sortOrder: sortOrder ? SortOrder[sortOrder] : SortOrder[SortOrder.ASC],
            isGlobal: isGlobalValue,
            isDefault: isDefaultValue,
            sortFieldValue: sortField,
        });
    }

    deleteReference(type: OperationType, reference: Reference): Observable<string> {
        return this.operationReferenceService.findReferenceService(type).deleteReference(reference);
    }

    saveReferences(type: OperationType, references: Reference[]): Observable<string[]> {
        return this.operationReferenceService.findReferenceService(type).saveReferences(references);
    }
}
