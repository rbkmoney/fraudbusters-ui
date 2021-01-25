import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { ConfigService } from '../../../config';
import { OperationType } from '../../../shared/constants/operation-type';
import { SortOrder } from '../../../shared/constants/sort-order';
import { booleanDelay } from '../../../shared/operators';
import { OperationTypeManagementService } from '../../../shared/services/operation-type-management.service';
import { FetchResult, PartialFetcher } from '../../../shared/utils/partial-fetcher';
import { Template } from '../../template/model/template';

export interface FetchTemplatesParams {
    type: OperationType;
    searchValue?: string;
    sortOrder?: SortOrder;
}

@Injectable()
export class FetchTemplatesService extends PartialFetcher<Template, FetchTemplatesParams> {
    inProgress$ = this.doAction$.pipe(booleanDelay(), shareReplay(1));
    private SIZE = this.configService.pageSize;
    //
    // inProgress$ = this.doAction$.pipe(booleanDelay(), shareReplay(1));
    // // private fetchTemplates$ = new Subject<FetchTemplatesParams>();
    // // private fetchMore$;
    // // private hasError$ = new Subject();
    // //
    // // response$ = this.fetchTemplates$.pipe(
    // //     switchMap((params) =>
    // //         this.operationTypeManagementService
    // //             .findTemplateService(params.type)
    // //             .findTemplates({
    // //                 size: this.SIZE,
    // //                 sortOrder: params.sortOrder || SortOrder.ASC,
    // //                 searchValue: params.searchValue,
    // //             })
    // //             .pipe(
    // //                 catchError((error: HttpErrorResponse) => {
    // //                     this.snackBar.open(`${error.status}: ${error.message}`, 'OK', {
    // //                         duration: 1500,
    // //                     });
    // //                     this.hasError$.next();
    // //                     return of(EMPTY);
    // //                 })
    // //             )
    // //     ),
    // //     shareReplay(1)
    // // );
    // //
    // // inProgress$ = progress(this.fetchTemplates$, merge(this.hasError$, this.response$));
    // //
    constructor(
        private operationTypeManagementService: OperationTypeManagementService,
        private configService: ConfigService
    ) {
        super();
    }

    fetch(params: FetchTemplatesParams, lastId?: string): Observable<FetchResult<Template>> {
        const { type, searchValue, sortOrder } = params;
        return this.operationTypeManagementService.findTemplateService(type).findTemplates({
            size: this.SIZE,
            sortOrder: sortOrder || SortOrder.ASC,
            ...(searchValue ? { searchValue } : {}),
            ...(lastId ? { lastId } : {}),
        });
    }

    //
    // //
    // // fetch(params: FetchTemplatesParams) {
    // //     this.fetchTemplates$.next(params);
    // // }
    // //
    // // fetchMore() {}
    //
    // protected fetch(params: FetchTemplatesParams, lastId?: string): Observable<FetchResult<TemplatesResponse>> {
    //     const { type, searchValue, sortOrder } = params;
    //     return this.operationTypeManagementService
    //         .findTemplateService(type)
    //         .findTemplates({
    //             size: this.SIZE,
    //             sortOrder: sortOrder || SortOrder.ASC,
    //             ...(searchValue ? { searchValue } : {}),
    //             ...(lastId ? { lastId } : {}),
    //         })
    //         .pipe(
    //             map(({ templateModels, count }) => ({
    //                 result: templateModels,
    //                 count,
    //             }))
    //         );
    // }
}
