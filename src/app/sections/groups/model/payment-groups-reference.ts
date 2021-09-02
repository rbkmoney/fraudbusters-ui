import { GroupReferenceModel } from './groups-reference';

export interface PaymentGroupReferenceModel extends GroupReferenceModel {
    partyId: string;
    shopId: string;
}
