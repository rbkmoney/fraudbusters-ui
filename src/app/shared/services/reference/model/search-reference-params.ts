import { SearchParams } from '../../../model/search-params';

export class SearchReferenceParams extends SearchParams {
    searchValue: string;
    isGlobal: boolean;
    isDefault: boolean;
    sortFieldValue: string;

    constructor(
        searchValue: string,
        lastId: string,
        size: number,
        sortOrder: string,
        isGlobal: boolean,
        isDefault: boolean,
        sortFieldValue?: string
    ) {
        super(null, lastId, size, sortOrder);
        this.searchValue = searchValue;
        this.isGlobal = isGlobal;
        this.isDefault = isDefault;
        this.sortFieldValue = sortFieldValue;
    }
}
