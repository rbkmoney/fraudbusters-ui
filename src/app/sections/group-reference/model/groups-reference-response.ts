import { P2pGroupReferenceModel } from './p2p-groups-reference';
import { PaymentGroupReferenceModel } from './payment-groups-reference';

export interface GroupsReferenceResponse {
    count: number;
    groupsReferenceModels: PaymentGroupReferenceModel[] | P2pGroupReferenceModel[];
}
