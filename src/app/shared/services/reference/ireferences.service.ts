import { Observable } from 'rxjs';

import { Reference } from '../../../sections/references/model/reference';
import { ReferencesResponse } from '../../../sections/references/model/references-response';
import { SearchReferenceParams } from './model/search-reference-params';

export interface IReferencesService {
    findReferences(params?: SearchReferenceParams): Observable<ReferencesResponse>;

    deleteReference(reference: Reference): Observable<string>;

    saveReferences(reference: Reference[]): Observable<string[]>;
}
