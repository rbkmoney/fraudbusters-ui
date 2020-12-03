import { Log } from '../../audit/model/log';

export interface AuditResponse {
    count: number;
    logs: Log[];
}
