import { Reference } from '../../../sections/references/model/reference';
import { Observable } from 'rxjs';
import { SearchReferenceParams } from './model/search-reference-params';
import { ReferencesResponse } from '../../../sections/references/model/references-response';

export interface IReferencesService {
    findReferences(params?: SearchReferenceParams): Observable<ReferencesResponse>;

    deleteReference(reference: Reference): Observable<string>;

    saveReference(reference: Reference): Observable<string>;
}
