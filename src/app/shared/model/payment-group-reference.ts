import { GroupReferenceModel } from './group-reference';

export interface PaymentGroupReferenceModel extends GroupReferenceModel {
    partyId: string;
    shopId: string;
}
