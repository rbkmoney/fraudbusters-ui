import { Observable, of } from 'rxjs';
import { catchError, first, map, mergeScan } from 'rxjs/operators';

import { FetchAction } from '../fetch-action';
import { FetchFn } from '../fetch-fn';
import { FetchResult } from '../fetch-result';

export const handleFetchResultError = <R>(templateModels: R[] = [], count?: number) => (
    s: Observable<FetchResult<R>>
): Observable<FetchResult<R>> =>
    s.pipe(
        catchError(() =>
            of<FetchResult<R>>({
                templateModels,
                count,
            })
        )
    );

export const scanFetchResult = <P, R>(fn: FetchFn<P, R>) => (
    s: Observable<FetchAction<P>>
): Observable<FetchResult<R>> =>
    s.pipe(
        mergeScan<FetchAction<P>, FetchResult<R>>(
            ({ templateModels, count }, { type, value }) => {
                switch (type) {
                    case 'search':
                        return fn(value).pipe(first(), handleFetchResultError());
                    case 'fetchMore':
                        const lastId = (templateModels[templateModels.length - 1] as any).id;
                        return fn(value, lastId).pipe(
                            first(),
                            map((r) => ({
                                templateModels: templateModels.concat(r.templateModels),
                                count: r.count,
                            })),
                            handleFetchResultError(templateModels, count)
                        );
                }
            },
            { templateModels: [] },
            1
        )
    );
