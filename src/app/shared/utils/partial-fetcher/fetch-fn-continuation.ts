import { Observable } from 'rxjs';

import { FetchResult } from './fetch-result';
import { FetchResultContinuation } from './fetch-result-continuation';

export type FetchFnContinuation<P, R> = (params: P, continuationId?: string) => Observable<FetchResultContinuation<R>>;
