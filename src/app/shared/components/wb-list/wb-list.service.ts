import { Injectable } from '@angular/core';
import { OperationType } from '../../constants/operation-type';
import { SortOrder } from '../../constants/sort-order';
import { Observable } from 'rxjs';
import { OperationTypeManagementService } from '../../services/operation-type-management.service';
import { ListsFilterResponse } from '../../services/lists/model/lists-filter-response';
import { ListType } from '../../constants/list-type';
import { CountInfoListRecord } from '../../services/lists/model/count-info-list-record';

@Injectable()
export class WbListService {
    constructor(private operationTypeManagementService: OperationTypeManagementService) {}

    findLists(
        listNamesValue: string[],
        listTypeValue: ListType,
        type: OperationType,
        sizeValue?: number,
        nameRegexp?: string,
        lastInListName?: string,
        sortOrder?: SortOrder,
        sortField?: string
    ): Observable<ListsFilterResponse> {
        return this.operationTypeManagementService.findListsService(type).findListRows({
            searchValue: nameRegexp,
            lastId: lastInListName,
            size: sizeValue,
            sortOrder: sortOrder ? SortOrder[sortOrder] : SortOrder[SortOrder.ASC],
            sortFieldValue: sortField,
            listNames: listNamesValue,
            listType: listTypeValue,
        });
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
