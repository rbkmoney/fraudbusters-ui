import { Observable } from 'rxjs';
import { SearchAuditParams } from './model/search-audit-params';
import { AuditResponse } from '../../../sections/references/model/audit-response';

export interface IAuditService {
    getObjectTypes(): Observable<string[]>;
    getCommandTypes(): Observable<string[]>;
    findLogs(params?: SearchAuditParams): Observable<AuditResponse>;
}
