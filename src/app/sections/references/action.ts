import { SortOrder } from '../../shared/constants/sort-order';
import { Reference } from '../reference/model/reference';

export enum ActionType {
    createReference = 'createReference',
    editReference = 'editReference',
    removeReference = 'removeReference',
    sortReference = 'sortReference',
    goToTemplate = 'goToTemplate',
}

export interface Action {
    type: ActionType;
    reference?: Reference;
    sortDirection?: SortOrder;
}
