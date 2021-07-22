import { SearchParams } from '../../../shared/model/search-params';
import { ListType } from '../../../shared/constants/list-type';

export interface SearchListsParams extends SearchParams {
    searchValue: string;
    sortFieldValue: string;
    listNames: string[];
    listType: ListType;
}
