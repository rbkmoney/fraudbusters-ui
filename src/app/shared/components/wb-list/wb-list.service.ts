import { Injectable } from '@angular/core';
import { OperationType } from '../../constants/operation-type';
import { SortOrder } from '../../constants/sort-order';
import { Observable } from 'rxjs';
import { OperationTypeManagementService } from '../../services/operation-type-management.service';
import { SearchListsParams } from '../../services/lists/model/search-lists-params';
import { ListsFilterResponse } from '../../services/lists/model/lists-filter-response';
import { ListType } from '../../constants/list-type';
import { ListRecord } from '../../services/lists/model/list-record';
import { CountInfoListRecord } from '../../services/lists/model/count-info-list-record';

@Injectable()
export class WbListService {
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

    saveListRow(type: OperationType, listType: ListType, rows: CountInfoListRecord[]): Observable<string[]> {
        return this.operationTypeManagementService.findListsService(type).saveListsRows(listType, rows);
    }
}
