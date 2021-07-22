import { SortOrder } from '../../../shared/constants/sort-order';
import { GroupReference } from '../../../api/fb-management/swagger-codegen/model/groupReference';

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
