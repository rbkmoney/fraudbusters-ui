import { GroupReferenceModel } from './groups-reference';

export class PaymentGroupReferenceModel extends GroupReferenceModel {
    partyId: string;
    shopId: string;

    constructor(id, groupId, partyId: string, shopId: string) {
        super(id, groupId);
        this.partyId = partyId;
        this.shopId = shopId;
    }
}
