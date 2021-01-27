import { Observable } from 'rxjs';

import { P2pReference } from '../../../sections/reference/model/p2p-reference';
import { PaymentReference } from '../../../sections/reference/model/payment-reference';
import { Reference } from '../../../sections/references/model/reference';
import { HttpSearchResponse } from '../../model/http-search-response';
import { SearchReferenceParams } from './model/search-reference-params';

export interface IReferencesService {
    findReferences(params?: SearchReferenceParams): Observable<HttpSearchResponse<PaymentReference | P2pReference>>;

    deleteReference(reference: Reference): Observable<string>;

    saveReferences(reference: Reference[]): Observable<string[]>;
}
