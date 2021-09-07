import { GroupReference } from '../../../api/fb-management/swagger-codegen/model/groupReference';
import { SortOrder } from '../../../shared/constants/sort-order';

export enum ActionType {
    createReference = 'createReference',
    removeReference = 'removeReference',
    sortReferences = 'sortReferences',
}

export interface Action {
    type: ActionType;
    reference?: GroupReference;
    sortDirection?: SortOrder;
}
