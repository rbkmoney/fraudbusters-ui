import {Template} from '../../../templates/model/template';
import {SortOrder} from '../../constants/sort-order';
import {Observable} from 'rxjs';
import {SearchTemplateParams} from './model/SearchTemplateParams';

export interface ITemplatesService {
  findTemplates: (params?: SearchTemplateParams) => Observable<Template[]>;
  deleteTemplate(template: Template): Observable<string>;
}
