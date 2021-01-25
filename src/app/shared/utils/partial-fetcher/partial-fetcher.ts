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
import { FetchResult } from './fetch-result';
import { scanAction, scanFetchResult } from './operators';

export abstract class PartialFetcher<R, P> {
    private action$ = new Subject<FetchAction<P>>();

    readonly fetchResultChanges$: Observable<{ result: R[]; hasMore: boolean; count: number }>;

    readonly searchResult$: Observable<R[]>;
    readonly hasMore$: Observable<boolean>;
    readonly doAction$: Observable<boolean>;
    readonly doSearchAction$: Observable<boolean>;
    readonly errors$ = new Subject();

    constructor(debounceActionTime: number = 300) {
        const actionWithParams$ = this.getActionWithParams(debounceActionTime);
        const fetchResult$ = this.getFetchResult(actionWithParams$);

        this.fetchResultChanges$ = fetchResult$.pipe(
            map(({ result, count }) => ({
                result,
                count,
                hasMore: result.length < count,
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

    fetchMore() {
        this.action$.next({ type: 'fetchMore' });
    }

    protected abstract fetch(...args: Parameters<FetchFn<P, R>>): ReturnType<FetchFn<P, R>>;

    private getActionWithParams(debounceActionTime: number): Observable<FetchAction<P>> {
        return this.action$.pipe(scanAction, debounceActionTime ? debounceTime(debounceActionTime) : tap(), share());
    }

    private getFetchResult(actionWithParams$: Observable<FetchAction<P>>): Observable<FetchResult<R>> {
        const fetchFn = this.fetch.bind(this) as FetchFn<P, R>;
        return actionWithParams$.pipe(
            scanFetchResult(fetchFn),
            shareReplay(1),
            catchError((error) => {
                this.errors$.next(error);
                console.error('Partial fetcher error: ', error);
                return error ? of(error) : EMPTY;
            })
        );
    }
}
