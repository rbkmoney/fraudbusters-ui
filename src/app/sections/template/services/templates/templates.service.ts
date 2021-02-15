import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CreateTemplateResponse } from '../../../../api/fb-management/swagger-codegen/model/createTemplateResponse';
import { TemplateModel } from '../../../../api/fb-management/swagger-codegen/model/templateModel';
import { ValidationResponse } from '../../../../api/fb-management/swagger-codegen/model/validationResponse';
import { OperationType } from '../../../../shared/constants/operation-type';
import { SortOrder } from '../../../../shared/constants/sort-order';
import { HttpSearchResponse } from '../../../../shared/model/http-search-response';
import { OperationTypeManagementService } from '../../../../shared/services/operation-type-management.service';

@Injectable()
export class TemplatesService {
    constructor(private operationTemplateService: OperationTypeManagementService) {}

    getTemplates(
        type: OperationType,
        sizeValue?: number,
        nameRegexp?: string,
        lastInListName?: string,
        sortOrder?: SortOrder
    ): Observable<HttpSearchResponse<TemplateModel>> {
        return this.operationTemplateService.findTemplateService(type).findTemplates({
            searchValue: nameRegexp,
            lastId: lastInListName,
            size: sizeValue,
            sortOrder: sortOrder ? sortOrder : SortOrder.ASC,
        });
    }

    deleteTemplate(type: OperationType, id: string): Observable<string> {
        return this.operationTemplateService.findTemplateService(type).deleteTemplate(id);
    }

    getTemplatesName(type: OperationType, regexp?: string): Observable<string[]> {
        return this.operationTemplateService.findTemplateService(type).getTemplatesName(regexp);
    }

    saveTemplate(type: OperationType, template: TemplateModel): Observable<CreateTemplateResponse> {
        return this.operationTemplateService.findTemplateService(type).saveTemplate(template);
    }

    validateTemplate(type: OperationType, template: TemplateModel): Observable<ValidationResponse> {
        return this.operationTemplateService.findTemplateService(type).validateTemplate(template);
    }
}
