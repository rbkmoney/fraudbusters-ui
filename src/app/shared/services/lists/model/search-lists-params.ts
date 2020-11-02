import { SearchParams } from '../../../model/search-params';
import { ListType } from '../../../constants/list-type';

export class SearchListsParams extends SearchParams {
    searchValue: string;
    sortFieldValue: string;
    listNames: string[] = [];
    listType: ListType;
    constructor(
        searchValue: string,
        lastId: string,
        size: number,
        sortOrder: string,
        sortFieldValue: string,
        listNames: string[],
        listType: ListType
    ) {
        super(searchValue, lastId, size, sortOrder);
        this.searchValue = searchValue;
        this.sortFieldValue = sortFieldValue;
        this.listNames = listNames;
        this.listType = listType;
    }
}
