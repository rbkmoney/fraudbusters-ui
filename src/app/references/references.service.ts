import { Injectable } from '@angular/core';
import { Reference } from './model/reference';
import { OperationType } from '../shared/constants/operation-type';
import { Observable } from 'rxjs';
import { OperationTypeManagementService } from '../shared/services/operation-type-management.service';
import { SortOrder } from '../shared/constants/sort-order';
import { SearchReferenceParams } from '../shared/services/reference/model/SearchReferenceParams';
import { ReferencesResponse } from './model/references-response';

@Injectable({
    providedIn: 'root',
})
export class ReferencesService {
    constructor(private operationReferenceService: OperationTypeManagementService) {}

    getReferences(
        type: OperationType,
        size?: number,
        nameRegexp?: string,
        lastInListName?: string,
        sortOrder?: SortOrder
    ): Observable<ReferencesResponse> {
        return this.operationReferenceService
            .findReferenceService(type)
            .findReferences(
                new SearchReferenceParams(
                    nameRegexp,
                    lastInListName,
                    size,
                    sortOrder ? SortOrder[sortOrder] : SortOrder[SortOrder.ASC]
                )
            );
    }

    deleteReference(type: OperationType, reference: Reference): Observable<string> {
        return this.operationReferenceService.findReferenceService(type).deleteReference(reference);
    }

    saveReference(type: OperationType, reference: Reference): Observable<string> {
        return this.operationReferenceService.findReferenceService(type).saveReference(reference);
    }

}
