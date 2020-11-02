import { PaymentListRecord } from './payment-list-record';
import { P2pListRecord } from './p2p-list-record';

export class ListsFilterResponse {
    count: number;
    wbListRecords: PaymentListRecord[] | P2pListRecord[];

    constructor(count: number, wbListRecords: PaymentListRecord[] | P2pListRecord[]) {
        this.count = count;
        this.wbListRecords = wbListRecords;
    }
}
