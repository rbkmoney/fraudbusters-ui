import { SortOrder } from '../../shared/constants/sort-order';

export enum ActionType {
    createTemplate = 'createTemplate',
    editTemplate = 'editTemplate',
    removeTemplate = 'removeTemplate',
    sortTemplates = 'sortTemplates',
}

export interface Action {
    type: ActionType;
    templateID?: string;
    sortDirection?: SortOrder;
}
