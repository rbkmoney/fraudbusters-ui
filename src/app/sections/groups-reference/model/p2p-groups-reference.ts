import { GroupReferenceModel } from './groups-reference';

export class P2pGroupReferenceModel extends GroupReferenceModel {
    identityId: string;

    constructor(id, groupId, identityId: string) {
        super(id, groupId);
        this.identityId = identityId;
    }
}
