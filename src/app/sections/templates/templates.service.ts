import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { OperationType } from '../../shared/constants/operation-type';
import { SortOrder } from '../../shared/constants/sort-order';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { TemplatesResponse } from './model/templates-response';

@Injectable()
export class TemplatesService {
    constructor(private operationTemplateService: OperationTypeManagementService) {}

    getTemplates(
        type: OperationType,
        sizeValue?: number,
        nameRegexp?: string,
        lastInListName?: string,
        sortOrder?: SortOrder
    ): Observable<TemplatesResponse> {
        return this.operationTemplateService.findTemplateService(type).findTemplates({
            searchValue: nameRegexp,
            lastId: lastInListName,
            size: sizeValue,
            sortOrder: sortOrder ? SortOrder[sortOrder] : SortOrder[SortOrder.ASC],
        });
    }

    deleteTemplate(type: OperationType, id: string): Observable<string> {
        return this.operationTemplateService.findTemplateService(type).deleteTemplate(id);
    }

    getTemplatesName(type: OperationType, regexp?: string): Observable<string[]> {
        return this.operationTemplateService.findTemplateService(type).getTemplatesName(regexp);
    }
}
