import { Observable } from 'rxjs';
import { GroupReferenceModel } from '../../../groups-reference/model/groups-reference';
import { GroupsReferenceResponse } from '../../../groups-reference/model/groups-reference-response';
import { SearchParams } from '../../model/SearchParams';

export interface IGroupsReferenceService {
    findGroups(params?: SearchParams): Observable<GroupsReferenceResponse>;

    deleteGroupReference(groupId: string, partyId: string, shopId: string): Observable<string>;

    saveGroupReference(groupId: string, groupReferenceModels: GroupReferenceModel[]): Observable<string[]>;
}
