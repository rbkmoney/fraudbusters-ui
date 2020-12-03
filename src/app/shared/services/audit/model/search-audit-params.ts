import { SearchParams } from '../../../model/search-params';

export interface SearchAuditParams extends SearchParams {
    userName?: string;
    commandType?: string[];
    objectType?: string[];
    sortFieldValue?: string;
}
