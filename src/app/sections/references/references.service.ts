import { Injectable } from '@angular/core';
import { Reference } from './model/reference';
import { OperationType } from '../../shared/constants/operation-type';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { SortOrder } from '../../shared/constants/sort-order';
import { ReferencesResponse } from './model/references-response';
import { FilterReference } from './model/filter-reference';
import { catchError, map, scan, switchMap } from 'rxjs/operators';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaymentReference } from './model/payment-reference';
import { P2pReference } from './model/p2p-reference';

@Injectable()
export class ReferencesService {
    filterReference$ = new BehaviorSubject<FilterReference>({ type: OperationType.Payment });
    isLoadMoreSubject$ = new BehaviorSubject<boolean>(false);
    lastRefSubject$ = new Subject<PaymentReference>();
    references$ = new Observable<PaymentReference[] | P2pReference[]>();
    isLoadMore$ = new Observable<boolean>();

    constructor(
        private operationReferenceService: OperationTypeManagementService,
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

    private pipeReferences(value: FilterReference): Observable<any> {
        return this.getReferences(value).pipe(
            catchError((error) => {
                this.errorHandlerService.handleError(error, this.snackBar);
                return of(error);
            }),
            map((ref) => {
                this.lastRefSubject$.next(ref.referenceModels[ref.referenceModels.length - 1]);
                return { references: ref.referenceModels, filter: value, count: ref.count };
            })
        );
    }

    nextReferences(filter: FilterReference): void {
        this.filterReference$.next(filter);
    }

    getReferences(filter: FilterReference): Observable<ReferencesResponse> {
        return this.operationReferenceService.findReferenceService(filter.type).findReferences({
            searchValue: filter.search,
            lastId: filter.lastInListName,
            size: filter.size,
            sortOrder: filter.sortOrder ? SortOrder[filter.sortOrder] : SortOrder[SortOrder.ASC],
            isGlobal: filter.isGlobalValue,
            isDefault: filter.isDefaultValue,
            sortFieldValue: filter.sortField,
        });
    }

    deleteReference(type: OperationType, reference: Reference): Observable<string> {
        return this.operationReferenceService.findReferenceService(type).deleteReference(reference);
    }

    saveReferences(type: OperationType, references: Reference[]): Observable<string[]> {
        return this.operationReferenceService.findReferenceService(type).saveReferences(references);
    }
}
