import { SortOrder } from '../../constants/sort-order';

export enum ActionType {
    createRecord = 'createRecord',
    editRecord = 'editRecord',
    removeRecord = 'removeRecord',
    sortList = 'sortList',
}

export interface Action {
    type: ActionType;
    templateID?: string;
    sortDirection?: SortOrder;
}
