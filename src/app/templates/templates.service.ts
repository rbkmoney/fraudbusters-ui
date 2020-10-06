import { Injectable } from '@angular/core';
import { Template } from './model/template';
import { OperationType } from '../shared/constants/operation-type';
import { Observable } from 'rxjs';
import { OperationTypeManagementService } from '../shared/services/operation-type-management.service';
import { SortOrder } from '../shared/constants/sort-order';
import { SearchTemplateParams } from '../shared/services/template/model/SearchTemplateParams';
import { ValidateTemplate } from './model/validate-template';
import { ValidateResponse } from './model/validate-response';

@Injectable({
    providedIn: 'root',
})
export class TemplatesService {
    constructor(private operationTemplateService: OperationTypeManagementService) {}

    getTemplates(
        type: OperationType,
        size?: number,
        nameRegexp?: string,
        lastInListName?: string,
        sortOrder?: SortOrder
    ): Observable<Template[]> {
        return this.operationTemplateService
            .findTemplateService(type)
            .findTemplates(
                new SearchTemplateParams(
                    nameRegexp,
                    lastInListName,
                    size,
                    sortOrder ? SortOrder[sortOrder] : SortOrder[SortOrder.ASC]
                )
            );
    }

    deleteTemplate(type: OperationType, template: Template): Observable<string> {
        return this.operationTemplateService.findTemplateService(type).deleteTemplate(template);
    }

    saveTemplate(type: OperationType, template: Template): Observable<ValidateTemplate> {
        return this.operationTemplateService.findTemplateService(type).saveTemplate(template);
    }

    validateTemplate(type: OperationType, templates: Template[]): Observable<ValidateResponse> {
        return this.operationTemplateService.findTemplateService(type).validateTemplates(templates);
    }
}
