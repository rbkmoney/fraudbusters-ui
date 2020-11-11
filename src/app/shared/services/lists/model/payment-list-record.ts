import { ListRecord } from './list-record';

export class PaymentListRecord extends ListRecord {
    partyId: string;
    shopId?: string;

    constructor(
        id: string,
        listName: string,
        value: string,
        insertTime: string,
        rowInfo: string,
        partyId: string,
        shopId: string
    ) {
        super(id, listName, value, insertTime, rowInfo);
        this.partyId = partyId;
        this.shopId = shopId;
    }
}
