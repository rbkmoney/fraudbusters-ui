import { PaymentReference } from './payment-reference';
import { P2pReference } from './p2p-reference';

export interface ReferencesResponse {
    count: number;
    referenceModels: PaymentReference[] | P2pReference[];
}
