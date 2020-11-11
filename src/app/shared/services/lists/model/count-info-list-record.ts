import { ListRecord } from './list-record';
import { CountInfo } from './count-info';
import { P2pListRecord } from './p2p-list-record';
import { PaymentListRecord } from './payment-list-record';

export class CountInfoListRecord {
    countInfo?: CountInfo;
    listRecord: P2pListRecord | PaymentListRecord;

    constructor(listRecord: P2pListRecord | PaymentListRecord, countInfo?: CountInfo) {
        this.countInfo = countInfo;
        this.listRecord = listRecord;
    }
}
