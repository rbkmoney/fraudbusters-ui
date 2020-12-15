import { Observable } from 'rxjs';
import { ListType } from '../../constants/list-type';
import { ListRecord } from './model/list-record';
import { SearchListsParams } from './model/search-lists-params';
import { ListsFilterResponse } from './model/lists-filter-response';
import { CountInfoListRecord } from './model/count-info-list-record';

export interface IListsService {
    findListRows(params: SearchListsParams): Observable<ListsFilterResponse>;

    deleteListRow(id: string): Observable<string>;

    saveListsRows(listType: ListType, records: CountInfoListRecord[]): Observable<string[]>;

    getNames(listType: ListType): Observable<string[]>;

    getAvailableListNames(): Observable<string[]>;
}
