import { OperationType } from '../../../shared/constants/operation-type';
import { SortOrder } from '../../../shared/constants/sort-order';

export interface FilterReference {
    type: OperationType;
    size?: number;
    search?: string;
    lastInListName?: string;
    sortOrder?: SortOrder;
    isGlobalValue?: boolean;
    isDefaultValue?: boolean;
    sortField?: string;
    loadMore?: boolean;
}
