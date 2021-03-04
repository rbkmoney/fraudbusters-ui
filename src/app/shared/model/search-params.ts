import { SortOrder } from '../constants/sort-order';

export interface SearchParams {
    lastId?: string;
    name?: string;
    searchValue?: string;
    size?: number;
    sortBy?: string;
    sortFieldValue?: string;
    sortOrder?: SortOrder;
}
