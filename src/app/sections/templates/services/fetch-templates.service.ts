import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

import { ConfigService } from '../../../config';
import { OperationType } from '../../../shared/constants/operation-type';
import { SortOrder } from '../../../shared/constants/sort-order';
import { booleanDelay } from '../../../shared/operators';
import { OperationTypeManagementService } from '../../../shared/services/operation-type-management.service';
import { TemplatesResponse } from '../../templates-old/model/templates-response';
import { FetchResult, PartialFetcher } from './partial-fetcher';

export interface FetchTemplatesParams {
    type: OperationType;
    searchValue?: string;
    sortOrder?: SortOrder;
}

@Injectable()
export class FetchTemplatesService extends PartialFetcher<TemplatesResponse, FetchTemplatesParams> {
    private SIZE = this.configService.pageSize;

    inProgress$ = this.doAction$.pipe(booleanDelay(), shareReplay(1));
    // private fetchTemplates$ = new Subject<FetchTemplatesParams>();
    // private fetchMore$;
    // private hasError$ = new Subject();
    //
    // response$ = this.fetchTemplates$.pipe(
    //     switchMap((params) =>
    //         this.operationTypeManagementService
    //             .findTemplateService(params.type)
    //             .findTemplates({
    //                 size: this.SIZE,
    //                 sortOrder: params.sortOrder || SortOrder.ASC,
    //                 searchValue: params.searchValue,
    //             })
    //             .pipe(
    //                 catchError((error: HttpErrorResponse) => {
    //                     this.snackBar.open(`${error.status}: ${error.message}`, 'OK', {
    //                         duration: 1500,
    //                     });
    //                     this.hasError$.next();
    //                     return of(EMPTY);
    //                 })
    //             )
    //     ),
    //     shareReplay(1)
    // );
    //
    // inProgress$ = progress(this.fetchTemplates$, merge(this.hasError$, this.response$));
    //
    constructor(
        private operationTypeManagementService: OperationTypeManagementService,
        private configService: ConfigService,
        private snackBar: MatSnackBar
    ) {
        super();
    }

    //
    // fetch(params: FetchTemplatesParams) {
    //     this.fetchTemplates$.next(params);
    // }
    //
    // fetchMore() {}

    protected fetch(params: FetchTemplatesParams, lastId?: string): Observable<FetchResult<TemplatesResponse>> {
        const { type, searchValue, sortOrder } = params;
        return this.operationTypeManagementService
            .findTemplateService(type)
            .findTemplates({
                size: this.SIZE,
                sortOrder: sortOrder || SortOrder.ASC,
                ...(searchValue ? { searchValue } : {}),
                ...(lastId ? { lastId } : {}),
            })
            .pipe(
                map(({ templateModels, count }) => ({
                    result: templateModels,
                    count,
                }))
            );
    }
}
