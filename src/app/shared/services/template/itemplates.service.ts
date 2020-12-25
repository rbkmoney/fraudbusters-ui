import { Observable } from 'rxjs';

import { Template } from '../../../sections/template/templates/model/template';
import { TemplatesResponse } from '../../../sections/template/templates/model/templates-response';
import { ValidateResponse } from '../../../sections/template/templates/model/validate-response';
import { ValidateTemplate } from '../../../sections/template/templates/model/validate-template';
import { SearchParams } from '../../model/search-params';

export interface ITemplatesService {
    findTemplates(params?: SearchParams): Observable<TemplatesResponse>;
    deleteTemplate(id: string): Observable<string>;
    saveTemplate(template: Template): Observable<ValidateTemplate>;
    validateTemplates(templates: Template[]): Observable<ValidateResponse>;
    getTemplatesName(nameRegexp?: string): Observable<string[]>;
}
