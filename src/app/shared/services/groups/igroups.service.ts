import { Template } from '../../../templates/model/template';
import { SortOrder } from '../../constants/sort-order';
import { Observable } from 'rxjs';
import { SearchTemplateParams } from '../template/model/SearchTemplateParams';
import { ValidateTemplate } from '../../../templates/model/validate-template';
import { ValidateResponse } from '../../../templates/model/validate-response';
import { TemplatesResponse } from '../../../templates/model/templates-response';
import { Group } from '../../../groups/model/group';

export interface IGroupsService {
    findGroups(id: string): Observable<Group[]>;
    getGroupById(id: string): Observable<Group>;
    deleteGroup(id: string): Observable<string>;
    saveGroup(group: Group): Observable<string>;
}
