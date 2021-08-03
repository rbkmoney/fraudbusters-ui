export interface FetchResultContinuation<T> {
    result?: T[];
    continuationId?: string;
}
