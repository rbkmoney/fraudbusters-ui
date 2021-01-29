import { Observable } from 'rxjs';

import { Template } from '../../../sections/template/model/template';
import { ValidateResponse } from '../../../sections/template/model/validate-response';
import { ValidateTemplate } from '../../../sections/template/model/validate-template';
import { SearchParams } from '../../model/search-params';

export interface ITemplatesService {
    findTemplates(params?: SearchParams): Observable<HttpSearchResponse<Template>>;
    deleteTemplate(id: string): Observable<string>;
    saveTemplate(template: Template): Observable<ValidateTemplate>;
    validateTemplate(template: Template): Observable<ValidateResponse>;
    getTemplatesName(nameRegexp?: string): Observable<string[]>;
}
