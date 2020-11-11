export class ListRecord {
    id?: string;
    listName: string;
    value: string;
    insertTime?: string;
    rowInfo?: string;

    constructor(id: string, listName: string, value: string, insertTime: string, rowInfo: string) {
        this.id = id;
        this.listName = listName;
        this.value = value;
        this.insertTime = insertTime;
        this.rowInfo = rowInfo;
    }
}
