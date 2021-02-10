import { P2pReferenceModel } from '../../api/fb-management/swagger-codegen/model/p2pReferenceModel';
import { PaymentReferenceModel } from '../../api/fb-management/swagger-codegen/model/paymentReferenceModel';
import { SortOrder } from '../../shared/constants/sort-order';

export enum ActionType {
    createReference = 'createReference',
    editReference = 'editReference',
    removeReference = 'removeReference',
    sortReferences = 'sortReferences',
    goToTemplate = 'goToTemplate',
}

export interface Action {
    type: ActionType;
    reference?: P2pReferenceModel | PaymentReferenceModel;
    sortDirection?: SortOrder;
}
