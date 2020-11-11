import { PaymentGroupReferenceModel } from './payment-groups-reference';
import { P2pGroupReferenceModel } from './p2p-groups-reference';

export interface GroupsReferenceResponse {
    count: number;
    groupsReferenceModels: PaymentGroupReferenceModel[] | P2pGroupReferenceModel[];
}
