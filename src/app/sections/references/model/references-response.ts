import { PaymentReference } from './payment-reference';
import { P2pReference } from './p2p-reference';

export class ReferencesResponse {
    count: number;
    referenceModels: PaymentReference[] | P2pReference[];

    constructor(count: number, referenceModels: PaymentReference[] | P2pReference[]) {
        this.count = count;
        this.referenceModels = referenceModels;
    }
}
