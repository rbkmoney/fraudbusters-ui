import { P2pReference, PaymentReference } from './reference';

export class ReferencesResponse {
    count: number;
    referenceModels: PaymentReference[] | P2pReference[];

    constructor(count: number, referenceModels: PaymentReference[] | P2pReference[]) {
        this.count = count;
        this.referenceModels = referenceModels;
    }
}
