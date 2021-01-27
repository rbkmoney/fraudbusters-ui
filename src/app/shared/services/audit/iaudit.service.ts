import { Observable } from 'rxjs';

import { Log } from '../../../sections/audit/model/log';
import { HttpSearchResponse } from '../../model/http-search-response';
import { SearchAuditParams } from './model/search-audit-params';

export interface IAuditService {
    getObjectTypes(): Observable<string[]>;
    getCommandTypes(): Observable<string[]>;
    findLogs(params?: SearchAuditParams): Observable<HttpSearchResponse<Log>>;
}
