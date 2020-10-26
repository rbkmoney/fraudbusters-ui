import { Observable } from 'rxjs';
import { GroupReferenceModel } from '../../../groups-reference/model/groups-reference';
import { SearchTemplateParams } from '../template/model/SearchTemplateParams';

export interface IGroupsReferenceService {
    findGroups(params?: SearchTemplateParams): Observable<GroupReferenceModel[]>;

    deleteGroup(id: string): Observable<string>;

    saveGroup(reference: GroupReferenceModel): Observable<string>;
}
