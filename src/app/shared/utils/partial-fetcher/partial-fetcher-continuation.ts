import { EMPTY, merge, Observable, of, Subject } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    pluck,
    share,
    shareReplay,
    startWith,
    tap,
} from 'rxjs/operators';

import { progress } from '../../operators';
import { FetchAction } from './fetch-action';
import { FetchFn } from './fetch-fn';
import { FetchFnContinuation } from './fetch-fn-continuation';
import { FetchResultContinuation } from './fetch-result-continuation';
import { scanAction } from './operators';
import { scanFetchResultContinuation } from './operators/scan-continuation-search-result';

export abstract class PartialFetcherContinuation<R, P> {
    private action$ = new Subject<FetchAction<P>>();

    fetchResultChanges$: Observable<{ result: R[]; hasMore: boolean; continuationId: string }>;

    readonly searchResult$: Observable<R[]>;
    readonly hasMore$: Observable<boolean>;
    readonly doAction$: Observable<boolean>;
    readonly doSearchAction$: Observable<boolean>;
    readonly errors$ = new Subject();

    constructor(debounceActionTime: number = 300) {
        const actionWithParams$ = this.getActionWithParams(debounceActionTime);
        const fetchResult$ = this.getFetchResult(actionWithParams$);

        this.fetchResultChanges$ = fetchResult$.pipe(
            map(({ result, continuationId }) => ({
                result,
                continuationId,
                hasMore: !!continuationId,
            })),
            share()
        );
        this.searchResult$ = this.fetchResultChanges$.pipe(pluck('result'), shareReplay(1));

        this.hasMore$ = this.fetchResultChanges$.pipe(
            pluck('hasMore'),
            startWith(null as boolean),
            distinctUntilChanged(),
            shareReplay(1)
        );

        this.doAction$ = progress(actionWithParams$, fetchResult$, true).pipe(shareReplay(1));
        this.doSearchAction$ = progress(
            actionWithParams$.pipe(filter(({ type }) => type === 'search')),
            fetchResult$,
            true
        ).pipe(shareReplay(1));

        merge(
            this.searchResult$,
            this.hasMore$,
            this.doAction$,
            this.doSearchAction$,
            this.errors$,
            this.fetchResultChanges$
        ).subscribe();
    }

    search(value: P) {
        this.action$.next({ type: 'search', value });
    }

    refresh() {
        this.action$.next({ type: 'search' });
    }

    fetchMore(value?: P) {
        this.action$.next(value ? { type: 'fetchMore', value } : { type: 'fetchMore' });
    }

    protected abstract fetch(...args: Parameters<FetchFn<P, R>>): ReturnType<FetchFn<P, R>>;

    private getActionWithParams(debounceActionTime: number): Observable<FetchAction<P>> {
        return this.action$.pipe(scanAction, debounceActionTime ? debounceTime(debounceActionTime) : tap(), share());
    }

    protected getFetchResult(actionWithParams$: Observable<FetchAction<P>>): Observable<FetchResultContinuation<R>> {
        const fetchFn = this.fetch.bind(this) as FetchFnContinuation<P, R>;
        return actionWithParams$.pipe(
            scanFetchResultContinuation(fetchFn),
            shareReplay(1),
            catchError((error) => {
                this.errors$.next(error);
                console.error('Partial fetcher error: ', error);
                return error ? of(error) : EMPTY;
            })
        );
    }
}
