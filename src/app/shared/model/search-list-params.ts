import { WbListRecords } from '../../api/fb-management/swagger-codegen/model/wbListRecords';
import { SearchParams } from './search-params';
import ListTypeEnum = WbListRecords.ListTypeEnum;

export interface SearchListParams extends SearchParams {
    listNames: string[];
    listType: ListTypeEnum;
}
