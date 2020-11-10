import { Observable } from 'rxjs';
import { GroupReferenceModel } from '../../../sections/groups-reference/model/groups-reference';
import { GroupsReferenceResponse } from '../../../sections/groups-reference/model/groups-reference-response';
import { SearchGroupsReferenceParams } from './model/search-group-reference-params';

export interface IGroupsReferenceService {
    findGroups(params?: SearchGroupsReferenceParams): Observable<GroupsReferenceResponse>;

    deleteGroupReference(reference: GroupReferenceModel): Observable<string>;

    saveGroupReference(groupReferenceModels: GroupReferenceModel[]): Observable<string[]>;
}
