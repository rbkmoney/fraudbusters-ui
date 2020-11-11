import { SearchParams } from '../../../model/search-params';
import { ListType } from '../../../constants/list-type';

export interface SearchListsParams extends SearchParams {
    searchValue: string;
    sortFieldValue: string;
    listNames: string[];
    listType: ListType;
}
