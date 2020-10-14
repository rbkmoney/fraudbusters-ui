export class Reference {
    id: string;
    templateId: string;
    isDefault: boolean;
    isGlobal: boolean;
    // todo add isDefault and isGlobal to constructor
    constructor(templateId) {
        this.templateId = templateId;
        this.isDefault = false;
        this.isGlobal = false;
    }
}

export class P2pReference extends Reference {
    identityId: string;

    constructor(templateId, identityId) {
        super(templateId);
        this.identityId = identityId;
    }
}

export class PaymentReference extends Reference {
    partyId: string;
    shopId: string;

    constructor(templateId, partyId, shopId) {
        super(templateId);
        this.partyId = partyId;
        this.shopId = shopId;
    }
}
