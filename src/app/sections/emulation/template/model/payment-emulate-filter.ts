export class PaymentEmulateFilter {
    partyId: string;
    shopId?: string;

    constructor(partyId: string, shopId?: string) {
        this.partyId = partyId;
        this.shopId = shopId;
    }
}
