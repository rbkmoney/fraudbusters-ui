import { Injectable } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

import { ConfigService } from '../../../config';
import { OperationType } from '../../../shared/constants/operation-type';
import { SortOrder } from '../../../shared/constants/sort-order';
import { progress } from '../../../shared/operators';
import { OperationTypeManagementService } from '../../../shared/services/operation-type-management.service';

export interface FetchTemplatesParams {
    type: OperationType;
}

@Injectable()
export class FetchTemplatesService {
    private SIZE = this.configService.pageSize;
    private fetchTemplates$ = new Subject<FetchTemplatesParams>();
    private hasError$ = new Subject();

    templates$ = this.fetchTemplates$.pipe(
        switchMap((params) =>
            this.operationTypeManagementService
                .findTemplateService(params.type)
                .findTemplates({
                    size: this.SIZE,
                    sortOrder: SortOrder.ASC,
                })
                .pipe(map((templates) => templates.templateModels))
        ),
        shareReplay(1)
    );

    inProgress$ = progress(this.fetchTemplates$, merge(this.hasError$, this.templates$));

    constructor(
        private operationTypeManagementService: OperationTypeManagementService,
        private configService: ConfigService
    ) {
        this.templates$.subscribe();
    }

    fetch(params: FetchTemplatesParams) {
        this.fetchTemplates$.next(params);
    }
}
