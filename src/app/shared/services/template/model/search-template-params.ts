import { SearchParams } from '../../../model/search-params';

export class SearchTemplateParams extends SearchParams {
    constructor(id: string, lastId: string, size: number, sortOrder: string) {
        super(id, lastId, size, sortOrder);
    }
}
