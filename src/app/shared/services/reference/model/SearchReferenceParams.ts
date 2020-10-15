import { SearchParams } from '../../../model/SearchParams';

export class SearchReferenceParams extends SearchParams {
    constructor(id: string, lastId: string, size: number, sortOrder: string) {
        super(id, lastId, size, sortOrder);
    }
}
