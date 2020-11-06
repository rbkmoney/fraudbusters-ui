import { Observable } from 'rxjs';
import { GroupReferenceModel } from '../../../sections/groups-reference/model/groups-reference';
import { GroupsReferenceResponse } from '../../../sections/groups-reference/model/groups-reference-response';
import { SearchParams } from '../../model/search-params';

export interface IGroupsReferenceService {
    findGroups(params?: SearchParams): Observable<GroupsReferenceResponse>;

    deleteGroupReference(reference: GroupReferenceModel): Observable<string>;

    saveGroupReference(groupReferenceModels: GroupReferenceModel[]): Observable<string[]>;
}
