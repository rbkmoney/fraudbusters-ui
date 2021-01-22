import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, merge, of, Subject } from 'rxjs';
import { catchError, shareReplay, switchMap } from 'rxjs/operators';

import { ConfigService } from '../../../config';
import { OperationType } from '../../../shared/constants/operation-type';
import { SortOrder } from '../../../shared/constants/sort-order';
import { progress } from '../../../shared/operators';
import { OperationTypeManagementService } from '../../../shared/services/operation-type-management.service';

export interface FetchTemplatesParams {
    type: OperationType;
    searchValue?: string;
    sortOrder?: SortOrder;
}

@Injectable()
export class FetchTemplatesService {
    private SIZE = this.configService.pageSize;
    private fetchTemplates$ = new Subject<FetchTemplatesParams>();
    private fetchMore$;
    private hasError$ = new Subject();

    response$ = this.fetchTemplates$.pipe(
        switchMap((params) =>
            this.operationTypeManagementService
                .findTemplateService(params.type)
                .findTemplates({
                    size: this.SIZE,
                    sortOrder: params.sortOrder || SortOrder.ASC,
                    searchValue: params.searchValue,
                })
                .pipe(
                    catchError((error: HttpErrorResponse) => {
                        this.snackBar.open(`${error.status}: ${error.message}`, 'OK', {
                            duration: 1500,
                        });
                        this.hasError$.next();
                        return of(EMPTY);
                    })
                )
        ),
        shareReplay(1)
    );

    inProgress$ = progress(this.fetchTemplates$, merge(this.hasError$, this.response$));

    constructor(
        private operationTypeManagementService: OperationTypeManagementService,
        private configService: ConfigService,
        private snackBar: MatSnackBar
    ) {
        this.response$.subscribe();
    }

    fetch(params: FetchTemplatesParams) {
        this.fetchTemplates$.next(params);
    }

    fetchMore() {}
}
