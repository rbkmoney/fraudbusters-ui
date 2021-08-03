import { Observable } from 'rxjs';

import { FetchResultContinuation } from './fetch-result-continuation';

export type FetchFnContinuation<P, R> = (params: P, continuationId?: string) => Observable<FetchResultContinuation<R>>;
