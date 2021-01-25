import { Observable } from 'rxjs';

import { FetchResult } from './fetch-result';

export type FetchFn<P, R> = (params: P, count?: number) => Observable<FetchResult<R>>;
