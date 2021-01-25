import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { OperationType } from '../../shared/constants/operation-type';
import { SortOrder } from '../../shared/constants/sort-order';
import { HttpSearchResponse } from '../../shared/model/http-search-response';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { Template } from './model/template';

@Injectable()
export class TemplatesService {
    constructor(private operationTemplateService: OperationTypeManagementService) {}

    getTemplates(
        type: OperationType,
        sizeValue?: number,
        nameRegexp?: string,
        lastInListName?: string,
        sortOrder?: SortOrder
    ): Observable<HttpSearchResponse<Template>> {
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
}
