import { Injectable } from '@angular/core';
import { OperationType } from '../../../shared/constants/operation-type';
import { SortOrder } from '../../../shared/constants/sort-order';
import { Observable } from 'rxjs';
import { OperationTypeManagementService } from '../../../shared/services/operation-type-management.service';
import { SearchListsParams } from '../../../shared/services/lists/model/search-lists-params';
import { ListsFilterResponse } from '../../../shared/services/lists/model/lists-filter-response';
import { ListType } from '../../../shared/constants/list-type';
import { ListRecord } from '../../../shared/services/lists/model/list-record';
import { CountInfoListRecord } from '../../../shared/services/lists/model/count-info-list-record';

@Injectable({
    providedIn: 'root',
})
export class WhiteListService {
    constructor(private operationTypeManagementService: OperationTypeManagementService) {}

    findLists(
        listNames: string[],
        listType: ListType,
        type: OperationType,
        size?: number,
        nameRegexp?: string,
        lastInListName?: string,
        sortOrder?: SortOrder,
        sortFieldValue?: string
    ): Observable<ListsFilterResponse> {
        return this.operationTypeManagementService
            .findListsService(type)
            .findListRows(
                new SearchListsParams(
                    nameRegexp,
                    lastInListName,
                    size,
                    sortOrder ? SortOrder[sortOrder] : SortOrder[SortOrder.ASC],
                    sortFieldValue,
                    listNames,
                    listType
                )
            );
    }

    deleteListRow(type: OperationType, id: string): Observable<string> {
        return this.operationTypeManagementService.findListsService(type).deleteListRow(id);
    }

    getNames(type: OperationType, listType: ListType): Observable<string[]> {
        return this.operationTypeManagementService.findListsService(type).getNames(listType);
    }

    saveListRow(type: OperationType, listType: ListType, rows: ListRecord[]): Observable<string[]> {
        return this.operationTypeManagementService.findListsService(type).saveListsRows(
            listType,
            rows.map((value) => new CountInfoListRecord(value))
        );
    }
}
