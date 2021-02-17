import { ListType } from '../../../constants/list-type';
import { SearchTemplatesParams } from '../../../model/search-templates-params';

export interface SearchListsParams extends SearchTemplatesParams {
    searchValue: string;
    sortFieldValue: string;
    listNames: string[];
    listType: ListType;
}
