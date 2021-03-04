import { SortOrder } from '../../../shared/constants/sort-order';
import { P2pGroupReferenceModel } from './p2p-groups-reference';
import { PaymentGroupReferenceModel } from './payment-groups-reference';

export enum ActionType {
    createReference = 'createReference',
    removeReference = 'removeReference',
    sortReferences = 'sortReferences',
}

export interface Action {
    type: ActionType;
    reference?: PaymentGroupReferenceModel | P2pGroupReferenceModel;
    sortDirection?: SortOrder;
}
