import { PaymentReference } from '../../../api/fb-management/swagger-codegen/model/paymentReference';
import { SortOrder } from '../../constants/sort-order';

export enum ActionType {
    createReference = 'createReference',
    editReference = 'editReference',
    removeReference = 'removeReference',
    sortReferences = 'sortReferences',
    goToTemplate = 'goToTemplate',
}

export interface Action {
    type: ActionType;
    reference?: PaymentReference;
    sortDirection?: SortOrder;
}
