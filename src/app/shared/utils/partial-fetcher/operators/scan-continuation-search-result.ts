import { Observable, of } from 'rxjs';
import { catchError, first, map, mergeScan } from 'rxjs/operators';

import { FetchAction } from '../fetch-action';
import { FetchFnContinuation } from '../fetch-fn-continuation';
import { FetchResultContinuation } from '../fetch-result-continuation';

export const handleFetchResultError = <R>(result: R[] = [], continuationId?: string) => (
    s: Observable<FetchResultContinuation<R>>
): Observable<FetchResultContinuation<R>> =>
    s.pipe(
        catchError(() =>
            of<FetchResultContinuation<R>>({
                result,
                continuationId,
            })
        )
    );

export const scanFetchResultContinuation = <P, R>(fn: FetchFnContinuation<P, R>) => (
    s: Observable<FetchAction<P>>
): Observable<FetchResultContinuation<R>> =>
    s.pipe(
        mergeScan<FetchAction<P>, FetchResultContinuation<R>>(
            ({ result, continuationId }, { type, value }) => {
                switch (type) {
                    case 'search':
                        return fn(value).pipe(first(), handleFetchResultError());
                    case 'fetchMore':
                        return fn(value, continuationId).pipe(
                            first(),
                            map((r) => ({
                                result: result.concat(r.result),
                                continuationId: r.continuationId,
                            })),
                            handleFetchResultError(result, continuationId)
                        );
                }
            },
            { result: [] },
            1
        )
    );
