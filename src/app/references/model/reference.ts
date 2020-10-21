export class Reference {
    id: string;
    templateId: string;
    isDefault: boolean;
    isGlobal: boolean;
    // todo add isDefault and isGlobal to constructor
    constructor(templateId) {
        this.templateId = templateId;
        this.isDefault = true;
        this.isGlobal = true;
    }
}
