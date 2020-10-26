import { GroupReferenceModel } from './groups-reference';

export class PaymentGroupReferenceModel extends GroupReferenceModel {
    partyId: string;
    shopId: string;

    constructor(groupId, partyId: string, shopId: string) {
        super(groupId);
        this.partyId = partyId;
        this.shopId = shopId;
    }
}
