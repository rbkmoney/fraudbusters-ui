import { SearchParams } from '../../../model/search-params';

export class SearchReferenceParams extends SearchParams {
    searchValue: string;
    constructor(id: string, lastId: string, size: number, sortOrder: string) {
        super(id, lastId, size, sortOrder);
        this.searchValue = id;
    }
}
