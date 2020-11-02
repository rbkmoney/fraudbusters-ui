import { ListRecord } from './list-record';
import { CountInfo } from './count-info';

export class CountInfoListRecord {
    countInfo?: CountInfo;
    listRecord: ListRecord;

    constructor(listRecord: ListRecord, countInfo?: CountInfo) {
        this.countInfo = countInfo;
        this.listRecord = listRecord;
    }
}
