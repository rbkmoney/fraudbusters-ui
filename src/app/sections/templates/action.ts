import { SortOrder } from '../../shared/constants/sort-order';

export enum Actions {
    createTemplate = 'createTemplate',
    editTemplate = 'editTemplate',
    removeTemplate = 'removeTemplate',
    sortTemplates = 'sortTemplates',
}

export interface Action {
    type: Actions;
    templateID?: string;
    sortDirection?: SortOrder;
}
