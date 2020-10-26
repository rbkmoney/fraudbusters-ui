import { Template } from '../../../templates/model/template';
import { Observable } from 'rxjs';
import { ValidateTemplate } from '../../../templates/model/validate-template';
import { ValidateResponse } from '../../../templates/model/validate-response';
import { TemplatesResponse } from '../../../templates/model/templates-response';
import { SearchParams } from '../../model/SearchParams';

export interface ITemplatesService {
    findTemplates(params?: SearchParams): Observable<TemplatesResponse>;
    deleteTemplate(id: string): Observable<string>;
    saveTemplate(template: Template): Observable<ValidateTemplate>;
    validateTemplates(templates: Template[]): Observable<ValidateResponse>;
    getTemplatesName(nameRegexp?: string): Observable<string[]>;
}
