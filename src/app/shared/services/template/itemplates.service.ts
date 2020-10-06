import {Template} from '../../../templates/model/template';
import {SortOrder} from '../../constants/sort-order';
import {Observable} from 'rxjs';
import {SearchTemplateParams} from './model/SearchTemplateParams';
import {ValidateTemplate} from '../../../templates/model/validate-template';
import {ValidateResponse} from '../../../templates/model/validate-response';

export interface ITemplatesService {
  findTemplates: (params?: SearchTemplateParams) => Observable<Template[]>;
  deleteTemplate(template: Template): Observable<string>;
  saveTemplate(template: Template): Observable<ValidateTemplate>;
  validateTemplates(templates: Template[]): Observable<ValidateResponse>;
}
