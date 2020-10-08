export class SearchTemplateParams {
    id?: string;
    lastId?: string;
    size?: number;
    sortOrder: string;

    constructor(id: string, lastId: string, size: number, sortOrder: string) {
        this.id = id;
        this.lastId = lastId;
        this.size = size;
        this.sortOrder = sortOrder;
    }
}
