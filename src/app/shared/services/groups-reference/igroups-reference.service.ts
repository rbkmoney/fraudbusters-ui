import { Observable } from 'rxjs';

import { GroupReferenceModel } from '../../../sections/groups-reference/model/groups-reference';
import { P2pGroupReferenceModel } from '../../../sections/groups-reference/model/p2p-groups-reference';
import { PaymentGroupReferenceModel } from '../../../sections/groups-reference/model/payment-groups-reference';
import { HttpSearchResponse } from '../../model/http-search-response';
import { SearchParams } from '../../model/search-params';

export interface IGroupsReferenceService {
    findGroups(
        params?: SearchParams
    ): Observable<HttpSearchResponse<PaymentGroupReferenceModel | P2pGroupReferenceModel>>;

    deleteGroupReference(reference: GroupReferenceModel): Observable<string>;

    saveGroupReference(groupReferenceModels: GroupReferenceModel[]): Observable<string[]>;
}
