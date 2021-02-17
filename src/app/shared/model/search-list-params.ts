import { WbListRecords } from '../../api/fb-management/swagger-codegen/model/wbListRecords';
import ListTypeEnum = WbListRecords.ListTypeEnum;

export interface SearchListParams {
    listNames: string[];
    listType: ListTypeEnum;
    lastId?: string;
    name?: string;
    searchValue?: string;
    size?: number;
    sortBy?: string;
}
