import { ListRecord } from './list-record';
import { ListType } from '../../../constants/list-type';
import { CountInfoListRecord } from './count-info-list-record';

export class InsertListRequest {
    listType: ListType;
    records: CountInfoListRecord[];

    constructor(listType: ListType, records: CountInfoListRecord[]) {
        this.listType = listType;
        this.records = records;
    }
}
