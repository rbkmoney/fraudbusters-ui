import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { BehaviorSubject, combineLatest, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { Log } from './model/log';
import { catchError, debounceTime, map, scan, switchMap, tap } from 'rxjs/operators';
import { SortOrder } from '../../shared/constants/sort-order';
import { AuditRemoteService } from '../../shared/services/audit/audit-remote.service';
import { Filter } from './model/filter';
import { Router } from '@angular/router';

@Injectable()
export class AuditService {
    searchFilter$ = new ReplaySubject<Filter>();
    searchField$ = new Subject<string>();

    sort$ = new BehaviorSubject<SortOrder>(SortOrder.DESC);
    lastSubject$ = new Subject<Log>();
    loadMoreAction$ = new BehaviorSubject<boolean>(false);

    commandsTypes$: Observable<string[]>;
    objectsTypes$: Observable<string[]>;
    logs$: Observable<Log[]>;

    isLoadMore$ = new Observable<boolean>();
    isLoadMoreSubject$ = new BehaviorSubject<boolean>(false);

    count = 0;
    isRefresh;

    constructor(
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar,
        private auditRemoteService: AuditRemoteService,
        private router: Router
    ) {
        this.commandsTypes$ = auditRemoteService.getCommandTypes();
        this.objectsTypes$ = auditRemoteService.getObjectTypes();

        this.searchField$
            .pipe(
                debounceTime(400),
                tap((value) =>
                    this.mergeQueryParam({
                        userId: value,
                    })
                )
            )
            .subscribe();

        this.sort$.subscribe((value) => (this.isRefresh = true));
        this.loadMoreAction$.subscribe((value) => (this.isRefresh = false));
        this.logs$ = combineLatest([this.searchFilter$, this.loadMoreAction$, this.sort$]).pipe(
            switchMap((value) => {
                console.log(value);
                return this.auditRemoteService
                    .findLogs({
                        sortOrder: SortOrder[value[2]],
                    })
                    .pipe(
                        catchError((error) => {
                            this.errorHandlerService.handleError(error, this.snackBar);
                            return of(error);
                        }),
                        map((ref) => {
                            this.lastSubject$.next(ref.logs[ref.logs.length - 1]);
                            this.count = ref.count;
                            return { logs: ref.logs, filter: value, count: ref.count };
                        })
                    );
            }),
            scan((logs, result) => {
                let logsRes;
                if (result.filter[1] && !this.isRefresh) {
                    logsRes = logs.concat(result.logs);
                } else {
                    logsRes = result.logs;
                }
                this.checkMore(logsRes);
                return logsRes;
            }, [])
        );
        this.isLoadMore$ = this.isLoadMoreSubject$.pipe();
    }

    private checkMore(logs: any[]): void {
        this.isLoadMoreSubject$.next(!!logs ? logs.length < this.count : false);
    }

    mergeQueryParam(params): void {
        this.router.navigate([], {
            queryParams: params,
            queryParamsHandling: 'merge',
        });
    }
}
