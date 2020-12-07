import { SearchParams } from '../../../model/search-params';

export interface SearchAuditParams extends SearchParams {
    userName?: string;
    commandTypes?: string[];
    objectTypes?: string[];
    sortFieldValue?: string;
    from?: string;
    to?: string;
}
