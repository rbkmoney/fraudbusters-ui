import { SearchTemplatesParams } from '../../../model/search-templates-params';

export interface SearchAuditParams extends SearchTemplatesParams {
    userName?: string;
    commandTypes?: string[];
    objectTypes?: string[];
    sortFieldValue?: string;
    from?: string;
    to?: string;
}
