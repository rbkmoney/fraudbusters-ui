import { Reference } from './reference';

export class PaymentReference extends Reference {
    partyId: string;
    shopId: string;

    constructor(templateId, partyId, shopId) {
        super(templateId);
        this.partyId = partyId;
        this.shopId = shopId;
    }
}
