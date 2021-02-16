import { Observable } from 'rxjs';

import { P2pReferenceModel } from '../../../api/fb-management/swagger-codegen/model/p2pReferenceModel';
import { PaymentReferenceModel } from '../../../api/fb-management/swagger-codegen/model/paymentReferenceModel';
import { HttpSearchResponse } from '../../model/http-search-response';
import { SearchReferenceParams } from './model/search-reference-params';

export interface IReferencesService {
    findReferences(
        params?: SearchReferenceParams
    ): Observable<HttpSearchResponse<PaymentReferenceModel | P2pReferenceModel>>;

    deleteReference(reference: PaymentReferenceModel | P2pReferenceModel): Observable<string>;

    saveReferences(reference: PaymentReferenceModel[] | P2pReferenceModel[]): Observable<string[]>;
}
