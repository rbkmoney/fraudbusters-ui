import { ListType } from '../../../constants/list-type';
import { SearchParams } from '../../../model/search-params';

export interface SearchListsParams extends SearchParams {
    searchValue: string;
    sortFieldValue: string;
    listNames: string[];
    listType: ListType;
}
