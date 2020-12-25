import { Observable } from 'rxjs';

import { ListType } from '../../constants/list-type';
import { CountInfoListRecord } from './model/count-info-list-record';
import { ListsFilterResponse } from './model/lists-filter-response';
import { SearchListsParams } from './model/search-lists-params';

export interface IListsService {
    findListRows(params: SearchListsParams): Observable<ListsFilterResponse>;

    deleteListRow(id: string): Observable<string>;

    saveListsRows(listType: ListType, records: CountInfoListRecord[]): Observable<string[]>;

    getNames(listType: ListType): Observable<string[]>;

    getAvailableListNames(): Observable<string[]>;
}
