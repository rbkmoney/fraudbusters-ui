import { Observable } from 'rxjs';

import { Template } from '../../../sections/templates/model/template';
import { ValidateResponse } from '../../../sections/templates/model/validate-response';
import { ValidateTemplate } from '../../../sections/templates/model/validate-template';
import { HttpSearchResponse } from '../../model/http-search-response';
import { SearchParams } from '../../model/search-params';

export interface ITemplatesService {
    findTemplates(params?: SearchParams): Observable<HttpSearchResponse<Template>>;
    deleteTemplate(id: string): Observable<string>;
    saveTemplate(template: Template): Observable<ValidateTemplate>;
    validateTemplate(template: Template): Observable<ValidateResponse>;
    getTemplatesName(nameRegexp?: string): Observable<string[]>;
}
