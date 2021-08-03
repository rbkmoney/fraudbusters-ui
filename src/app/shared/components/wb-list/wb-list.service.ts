import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ListType } from '../../constants/list-type';
import { OperationType } from '../../constants/operation-type';
import { SortOrder } from '../../constants/sort-order';
import { HttpSearchResponse } from '../../model/http-search-response';
import { PaymentListsService } from '../../../api/payments/lists/payment-lists.service';
import { PaymentListRecord } from '../../../api/fb-management/swagger-codegen/model/paymentListRecord';
import { PaymentCountInfo } from '../../../api/fb-management/swagger-codegen/model/paymentCountInfo';

@Injectable()
export class WbListService {
    constructor(private paymentListsService: PaymentListsService) {}

    findLists(
        listNamesValue: string[],
        listTypeValue: ListType,
        sizeValue?: number,
        nameRegexp?: string,
        lastInListName?: string,
        sortOrder?: SortOrder,
        sortField?: string
    ): Observable<HttpSearchResponse<PaymentListRecord>> {
        return this.paymentListsService.findListRows({
            searchValue: nameRegexp,
            lastId: lastInListName,
            size: sizeValue,
            sortOrder: sortOrder ? sortOrder : SortOrder.ASC,
            sortFieldValue: sortField,
            listNames: listNamesValue,
            listType: listTypeValue,
        });
    }

    deleteListRow(id: string): Observable<string> {
        return this.paymentListsService.deleteListRow(id);
    }

    getNames(listType: ListType): Observable<string[]> {
        return this.paymentListsService.getNames(listType);
    }

    getAvailableListNames(): Observable<string[]> {
        return this.paymentListsService.getAvailableListNames();
    }

    saveListRow(listType: ListType, rows: PaymentCountInfo[]): Observable<string[]> {
        return this.paymentListsService.saveListsRows(listType, rows);
    }

    saveListRowsFromFile(type: OperationType, listType: ListType, file: File): Observable<any> {
        return this.paymentListsService.saveListsRowsFromFile(listType, file);
    }
}
