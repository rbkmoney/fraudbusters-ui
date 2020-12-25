import { Observable } from 'rxjs';

import { AuditResponse } from '../../../sections/references/model/audit-response';
import { SearchAuditParams } from './model/search-audit-params';

export interface IAuditService {
    getObjectTypes(): Observable<string[]>;
    getCommandTypes(): Observable<string[]>;
    findLogs(params?: SearchAuditParams): Observable<AuditResponse>;
}
