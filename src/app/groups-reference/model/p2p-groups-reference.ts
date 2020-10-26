import { GroupReferenceModel } from './groups-reference';

export class P2pGroupReferenceModel extends GroupReferenceModel {
    identityId: string;

    constructor(groupId, identityId: string) {
        super(groupId);
        this.identityId = identityId;
    }
}
