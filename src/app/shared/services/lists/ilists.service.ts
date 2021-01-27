import { Observable } from 'rxjs';

import { ListType } from '../../constants/list-type';
import { HttpSearchResponse } from '../../model/http-search-response';
import { CountInfoListRecord } from './model/count-info-list-record';
import { P2pListRecord } from './model/p2p-list-record';
import { PaymentListRecord } from './model/payment-list-record';
import { SearchListsParams } from './model/search-lists-params';

export interface IListsService {
    findListRows(params: SearchListsParams): Observable<HttpSearchResponse<PaymentListRecord | P2pListRecord>>;

    deleteListRow(id: string): Observable<string>;

    saveListsRows(listType: ListType, records: CountInfoListRecord[]): Observable<string[]>;

    getNames(listType: ListType): Observable<string[]>;

    getAvailableListNames(): Observable<string[]>;
}
