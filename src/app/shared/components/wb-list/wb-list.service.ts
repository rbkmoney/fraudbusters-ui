import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { P2pFilterListRecordsResponse } from '../../../api/fb-management/swagger-codegen/model/p2pFilterListRecordsResponse';
import { PaymentFilterListRecordsResponse } from '../../../api/fb-management/swagger-codegen/model/paymentFilterListRecordsResponse';
import { ListType } from '../../constants/list-type';
import { OperationType } from '../../constants/operation-type';
import { SortOrder } from '../../constants/sort-order';
import { CountInfoListRecord } from '../../services/lists/model/count-info-list-record';
import { OperationTypeManagementService } from '../../services/operation-type-management.service';

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
    ): Observable<PaymentFilterListRecordsResponse | P2pFilterListRecordsResponse> {
        return this.operationTypeManagementService.findListsService(type).findListRows({
            searchValue: nameRegexp,
            lastId: lastInListName,
            size: sizeValue,
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

    getAvailableListNames(type: OperationType): Observable<string[]> {
        return this.operationTypeManagementService.findListsService(type).getAvailableListNames();
    }

    saveListRow(type: OperationType, listType: ListType, rows: CountInfoListRecord[]): Observable<string[]> {
        return this.operationTypeManagementService.findListsService(type).saveListsRows(listType, rows);
    }
}
