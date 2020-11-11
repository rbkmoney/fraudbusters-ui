import { Template } from '../../../sections/templates/model/template';
import { Observable } from 'rxjs';
import { ValidateTemplate } from '../../../sections/templates/model/validate-template';
import { ValidateResponse } from '../../../sections/templates/model/validate-response';
import { TemplatesResponse } from '../../../sections/templates/model/templates-response';
import { SearchParams } from '../../model/search-params';

export interface ITemplatesService {
    findTemplates(params?: SearchParams): Observable<TemplatesResponse>;
    deleteTemplate(id: string): Observable<string>;
    saveTemplate(template: Template): Observable<ValidateTemplate>;
    validateTemplates(templates: Template[]): Observable<ValidateResponse>;
    getTemplatesName(nameRegexp?: string): Observable<string[]>;
}
