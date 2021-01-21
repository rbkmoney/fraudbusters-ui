export enum Actions {
    createTemplate = 'createTemplate',
    editTemplate = 'editTemplate',
    removeTemplate = 'removeTemplate',
}

export interface Action {
    type: Actions;
    templateID?: string;
}
