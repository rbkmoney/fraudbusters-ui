import { SearchParams } from '../../../model/search-params';

export interface SearchGroupsReferenceParams extends SearchParams {
    idRegexp: string;
    sortFieldValue: string;
}
