import { P2pReference } from './p2p-reference';
import { PaymentReference } from './payment-reference';

export interface ReferencesResponse {
    count: number;
    referenceModels: PaymentReference[] | P2pReference[];
}
