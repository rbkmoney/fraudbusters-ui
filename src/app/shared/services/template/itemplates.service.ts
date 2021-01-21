import { Observable } from 'rxjs';

import { Template } from '../../../sections/templates-old/model/template';
import { TemplatesResponse } from '../../../sections/templates-old/model/templates-response';
import { ValidateResponse } from '../../../sections/templates-old/model/validate-response';
import { ValidateTemplate } from '../../../sections/templates-old/model/validate-template';
import { SearchParams } from '../../model/search-params';

export interface ITemplatesService {
    findTemplates(params?: SearchParams): Observable<TemplatesResponse>;
    deleteTemplate(id: string): Observable<string>;
    saveTemplate(template: Template): Observable<ValidateTemplate>;
    validateTemplate(template: Template): Observable<ValidateResponse>;
    getTemplatesName(nameRegexp?: string): Observable<string[]>;
}
