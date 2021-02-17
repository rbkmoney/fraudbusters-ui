import { SearchTemplatesParams } from '../../../model/search-templates-params';

export interface SearchReferenceParams extends SearchTemplatesParams {
    searchValue: string;
    isGlobal: boolean;
    isDefault: boolean;
    sortFieldValue: string;
}
