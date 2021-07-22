import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, map, scan, switchMap } from 'rxjs/operators';

import { OperationType } from '../../shared/constants/operation-type';
import { SortOrder } from '../../shared/constants/sort-order';
import { HttpSearchResponse } from '../../shared/model/http-search-response';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { FilterReference } from './model/filter-reference';
import { PaymentReferencesService } from '../../api/payments/references';
import { PaymentReference } from '../../api/fb-management/swagger-codegen/model/paymentReference';

@Injectable()
export class ReferencesService {
    filterReference$ = new BehaviorSubject<FilterReference>({ type: OperationType.Payment });
    isLoadMoreSubject$ = new BehaviorSubject<boolean>(false);
    lastRefSubject$ = new Subject<PaymentReference>();
    references$ = new Observable<PaymentReference[]>();
    isLoadMore$ = new Observable<boolean>();

    constructor(
        private paymentReferencesService: PaymentReferencesService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar
    ) {
        this.references$ = this.filterReference$.pipe(
            switchMap((value) => this.pipeReferences(value)),
            scan((references, result) => {
                this.checkMoreReferences(result, references);
                if (result.filter.loadMore) {
                    return references.concat(result.references);
                }
                return result.references;
            }, [])
        );
        this.isLoadMore$ = this.isLoadMoreSubject$.pipe();
    }

    private checkMoreReferences(result: any, references: any[]): void {
        this.isLoadMoreSubject$.next(
            !!result.references ? references.length + result.references.length < result.count : false
        );
    }

    private pipeReferences(filterReference: FilterReference): Observable<any> {
        return this.getReferences(filterReference).pipe(
            catchError((error) => {
                this.errorHandlerService.handleError(error, this.snackBar);
                return of(error);
            }),
            map((ref) => {
                this.lastRefSubject$.next(ref.result[ref.result.length - 1]);
                return { references: ref.result, filter: filterReference, count: ref.count };
            })
        );
    }

    nextReferences(filter: FilterReference): void {
        this.filterReference$.next(filter);
    }

    getReferences(filter: FilterReference): Observable<HttpSearchResponse<PaymentReference>> {
        return this.paymentReferencesService.findReferences({
            searchValue: filter.search,
            lastId: filter.lastInListName,
            size: filter.size,
            sortOrder: filter.sortOrder ? filter.sortOrder : SortOrder.ASC,
            isGlobal: filter.isGlobalValue,
            isDefault: filter.isDefaultValue,
            sortFieldValue: filter.sortField,
        });
    }

    deleteReference(reference: PaymentReference): Observable<string> {
        return this.paymentReferencesService.deleteReference(reference);
    }

    saveReferences(references: PaymentReference[]): Observable<string[]> {
        return this.paymentReferencesService.saveReferences(references);
    }
}
