import { Template } from '../../../templates/model/template';
import { Observable } from 'rxjs';
import { SearchTemplateParams } from './model/SearchTemplateParams';
import { ValidateTemplate } from '../../../templates/model/validate-template';
import { ValidateResponse } from '../../../templates/model/validate-response';
import { TemplatesResponse } from '../../../templates/model/templates-response';

export interface ITemplatesService {
    findTemplates(params?: SearchTemplateParams): Observable<TemplatesResponse>;
    deleteTemplate(id: string): Observable<string>;
    saveTemplate(template: Template): Observable<ValidateTemplate>;
    validateTemplates(templates: Template[]): Observable<ValidateResponse>;
    getTemplatesName(nameRegexp?: string): Observable<string[]>;
}
