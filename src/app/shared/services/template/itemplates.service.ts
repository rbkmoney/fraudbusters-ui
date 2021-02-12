import { Observable } from 'rxjs';

import { Template } from '../../../sections/template/types/template';
import { ValidateResponse } from '../../../sections/template/types/validate-response';
import { ValidateTemplate } from '../../../sections/template/types/validate-template';
import { HttpSearchResponse } from '../../model/http-search-response';
import { SearchParams } from '../../model/search-params';

export interface ITemplatesService {
    findTemplates(params?: SearchParams): Observable<HttpSearchResponse<Template>>;
    deleteTemplate(id: string): Observable<string>;
    saveTemplate(template: Template): Observable<ValidateTemplate>;
    validateTemplate(template: Template): Observable<ValidateResponse>;
    getTemplatesName(nameRegexp?: string): Observable<string[]>;
}
