import { Template } from '../../../templates/model/template';
import { Observable } from 'rxjs';
import { SearchTemplateParams } from './model/SearchTemplateParams';

export interface ITemplatesService {
    findTemplates: (params?: SearchTemplateParams) => Observable<Template[]>;
}
