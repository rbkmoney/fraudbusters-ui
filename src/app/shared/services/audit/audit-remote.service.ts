import { Observable, of } from 'rxjs';
import { SearchAuditParams } from './model/search-audit-params';
import { AuditResponse } from '../../../sections/references/model/audit-response';
import { Injectable } from '@angular/core';
import { IAuditService } from './iaudit.service';

@Injectable()
export class AuditRemoteService implements IAuditService {
    getObjectTypes(): Observable<string[]> {
        return of(['template', 'reference']);
    }

    getCommandTypes(): Observable<string[]> {
        return of(['CREATE', 'DELETE']);
    }

    findLogs(params?: SearchAuditParams): Observable<AuditResponse> {
        return of({
            count: 15,
            logs: [
                {
                    timestamp: '2020-07-14T14:29:37.083142',
                    user: 'struga',
                    commandType: 'CREATE',
                    objectType: 'template',
                    object: '{}',
                },
                {
                    timestamp: '2020-07-14T14:29:37.083142',
                    user: 'struga',
                    commandType: 'CREATE',
                    objectType: 'template',
                    object: '{}',
                },
                {
                    timestamp: '2020-07-14T14:29:37.083142',
                    user: 'struga',
                    commandType: 'CREATE',
                    objectType: 'template',
                    object: '{}',
                },
                {
                    timestamp: '2020-07-14T14:29:37.083142',
                    user: 'struga',
                    commandType: 'CREATE',
                    objectType: 'template',
                    object: '{}',
                },
                {
                    timestamp: '2020-07-14T14:29:37.083142',
                    user: 'struga',
                    commandType: 'CREATE',
                    objectType: 'template',
                    object: '{}',
                },
                {
                    timestamp: '2020-07-14T14:29:37.083142',
                    user: 'struga',
                    commandType: 'CREATE',
                    objectType: 'template',
                    object: '{}',
                },
                {
                    timestamp: '2020-07-14T14:29:37.083142',
                    user: 'struga',
                    commandType: 'CREATE',
                    objectType: 'template',
                    object: '{}',
                },
                {
                    timestamp: '2020-07-14T14:29:37.083142',
                    user: 'struga',
                    commandType: 'CREATE',
                    objectType: 'template',
                    object: '{}',
                },
                {
                    timestamp: '2020-07-14T14:29:37.083142',
                    user: 'struga',
                    commandType: 'CREATE',
                    objectType: 'template',
                    object: '{}',
                },
                {
                    timestamp: '2020-07-14T14:29:37.083142',
                    user: 'struga',
                    commandType: 'CREATE',
                    objectType: 'template',
                    object: '{}',
                },
            ],
        });
    }
}
