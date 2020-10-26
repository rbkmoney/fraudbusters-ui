import { PaymentGroupReferenceModel } from './payment-groups-reference';
import { P2pGroupReferenceModel } from './p2p-groups-reference';

export class GroupsReferenceResponse {
    count: number;
    groupsReferenceModels: PaymentGroupReferenceModel[] | P2pGroupReferenceModel[];

    constructor(count: number, groupsReferenceModels: PaymentGroupReferenceModel[] | P2pGroupReferenceModel[]) {
        this.count = count;
        this.groupsReferenceModels = groupsReferenceModels;
    }
}
