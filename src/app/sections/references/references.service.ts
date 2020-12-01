import { Injectable } from '@angular/core';
import { Reference } from './model/reference';
import { OperationType } from '../../shared/constants/operation-type';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { SortOrder } from '../../shared/constants/sort-order';
import { ReferencesResponse } from './model/references-response';
import { FilterReference } from './model/filter-reference';
import { Template } from '../templates/model/template';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ReferencesService {
    filterReference$ = new BehaviorSubject<FilterReference>({ type: OperationType.Payment });
    isLoadMoreSubject$ = new BehaviorSubject<boolean>(false);
    references$ = new Observable<Template[]>();
    isLoadMore$ = new Observable<boolean>();
    length = 0;

    constructor(
        private operationReferenceService: OperationTypeManagementService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar
    ) {
        this.references$ = this.filterReference$.pipe(
            switchMap((value) =>
                this.getReferences(value).pipe(
                    catchError((error) => {
                        this.errorHandlerService.handleError(error, this.snackBar);
                        return of(error);
                    }),
                    map((ref) => {
                        console.log(ref.referenceModels ? ref.referenceModels.length < ref.count : false);
                        this.isLoadMoreSubject$.next(
                            !!ref.referenceModels ? ref.referenceModels.length < ref.count : false
                        );
                        this.length = ref.referenceModels.length;
                        return ref.referenceModels;
                    })
                )
            )
        );
        this.isLoadMore$ = this.isLoadMoreSubject$.pipe();
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
