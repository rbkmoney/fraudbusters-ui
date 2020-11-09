import { SearchParams } from '../../../model/search-params';

export class SearchReferenceParams extends SearchParams {
    searchValue: string;
    isGlobal: boolean;
    isDefault: boolean;

    constructor(
        searchValue: string,
        lastId: string,
        size: number,
        sortOrder: string,
        isGlobal: boolean,
        isDefault: boolean,
        id?: string
    ) {
        super(id, lastId, size, sortOrder);
        this.searchValue = searchValue;
        this.isGlobal = isGlobal;
        this.isDefault = isDefault;
    }
}
