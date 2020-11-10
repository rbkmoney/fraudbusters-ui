import { Reference } from './reference';

export interface PaymentReference extends Reference {
    partyId: string;
    shopId: string;
}
