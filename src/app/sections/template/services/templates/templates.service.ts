import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CreateTemplateResponse } from '../../../../api/fb-management/swagger-codegen/model/createTemplateResponse';
import { ValidationResponse } from '../../../../api/fb-management/swagger-codegen/model/validationResponse';
import { OperationType } from '../../../../shared/constants/operation-type';
import { SortOrder } from '../../../../shared/constants/sort-order';
import { HttpSearchResponse } from '../../../../shared/model/http-search-response';
import { PaymentTemplatesService } from '../../../../api';
import { Template } from '../../../../api/fb-management/swagger-codegen/model/template';

@Injectable()
export class TemplatesService {
    constructor(private paymentTemplatesService: PaymentTemplatesService) {}

    getTemplates(
        sizeValue?: number,
        nameRegexp?: string,
        lastInListName?: string,
        sortOrder?: SortOrder
    ): Observable<HttpSearchResponse<Template>> {
        return this.paymentTemplatesService.findTemplates({
            searchValue: nameRegexp,
            lastId: lastInListName,
            size: sizeValue,
            sortOrder: sortOrder ? sortOrder : SortOrder.ASC,
        });
    }

    deleteTemplate(id: string): Observable<string> {
        return this.paymentTemplatesService.deleteTemplate(id);
    }

    getTemplatesName(regexp?: string): Observable<string[]> {
        return this.paymentTemplatesService.getTemplatesName(regexp);
    }

    saveTemplate(template: Template): Observable<CreateTemplateResponse> {
        return this.paymentTemplatesService.saveTemplate(template);
    }

    validateTemplate(template: Template): Observable<ValidationResponse> {
        return this.paymentTemplatesService.validateTemplate(template);
    }
}
