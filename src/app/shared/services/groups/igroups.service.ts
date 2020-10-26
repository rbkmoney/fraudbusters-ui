import { Observable } from 'rxjs';
import { Group } from '../../../groups/model/group';

export interface IGroupsService {
    findGroups(id: string): Observable<Group[]>;
    getGroupById(id: string): Observable<Group>;
    deleteGroup(id: string): Observable<string>;
    saveGroup(group: Group): Observable<string>;
}
