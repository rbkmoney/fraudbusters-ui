import { Observable } from 'rxjs';

import { DefaultP2pReferenceModel } from '../../../api/fb-management/swagger-codegen/model/defaultP2pReferenceModel';
import { DefaultPaymentReferenceModel } from '../../../api/fb-management/swagger-codegen/model/defaultPaymentReferenceModel';
import { P2pReferenceModel } from '../../../api/fb-management/swagger-codegen/model/p2pReferenceModel';
import { PaymentReferenceModel } from '../../../api/fb-management/swagger-codegen/model/paymentReferenceModel';
import { HttpSearchResponse } from '../../model/http-search-response';
import { SearchParams } from '../../model/search-params';
import { SearchReferenceParams } from './model/search-reference-params';

export interface IReferencesService {
    findReferences(
        params?: SearchReferenceParams
    ): Observable<HttpSearchResponse<PaymentReferenceModel | P2pReferenceModel>>;

    deleteReference(reference: PaymentReferenceModel | P2pReferenceModel): Observable<string>;

    saveReferences(reference: PaymentReferenceModel[] | P2pReferenceModel[]): Observable<string[]>;

    saveDefaultReference(reference: DefaultPaymentReferenceModel | DefaultP2pReferenceModel): Observable<string>;

    deleteDefaultReference(reference: DefaultPaymentReferenceModel | DefaultP2pReferenceModel): Observable<string>;

    findDefaultReferences(
        params?: SearchParams
    ): Observable<HttpSearchResponse<DefaultPaymentReferenceModel | DefaultP2pReferenceModel>>;
}
