import { Reference } from './reference';

export class P2pReference extends Reference {
    identityId: string;

    constructor(templateId, identityId) {
        super(templateId);
        this.identityId = identityId;
    }
}
