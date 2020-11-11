import { ListRecord } from './list-record';

export class P2pListRecord extends ListRecord {
    identityId: string;

    constructor(id: string, listName: string, value: string, insertTime: string, rowInfo: string, identityId: string) {
        super(id, listName, value, insertTime, rowInfo);
        this.identityId = identityId;
    }
}
