import { SearchParams } from '../../../model/search-params';

export class SearchGroupsReferenceParams extends SearchParams {
    idRegexp: string;
    sortFieldValue: string;
    constructor(id: string, lastId: string, size: number, sortOrder: string, sortFieldValue: string) {
        super(id, lastId, size, sortOrder);
        this.idRegexp = id;
        this.sortFieldValue = sortFieldValue;
    }
}
