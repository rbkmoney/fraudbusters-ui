import { Observable } from 'rxjs';
import { GroupReferenceModel } from '../../../groups-reference/model/groups-reference';
import { GroupsReferenceResponse } from '../../../groups-reference/model/groups-reference-response';
import { SearchParams } from '../../model/SearchParams';

export interface IGroupsReferenceService {
    findGroups(params?: SearchParams): Observable<GroupsReferenceResponse>;

    deleteGroupReference(reference: GroupReferenceModel): Observable<string>;

    saveGroupReference(groupReferenceModels: GroupReferenceModel[]): Observable<string[]>;
}
