import { SearchParams } from '../../../model/search-params';

export interface SearchReferenceParams extends SearchParams {
    searchValue: string;
    isGlobal: boolean;
    isDefault: boolean;
    sortFieldValue: string;
}
