import {Injectable} from '@angular/core';
import {Template} from './model/template';
import {OperationType} from '../shared/constants/operation-type';
import {Observable} from 'rxjs';
import {OperationTypeManagementService} from '../shared/services/operation-type-management.service';
import {SortOrder} from '../shared/constants/sort-order';
import {SearchTemplateParams} from '../shared/services/template/model/SearchTemplateParams';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(private operationTemplateService: OperationTypeManagementService) {
  }

  getTemplates(type: OperationType, size?: number, nameRegexp?: string, lastInListName?: string, sortOrder?: SortOrder): Observable<Template[]> {
    return this.operationTemplateService
      .findTemplateService(type)
      .findTemplates(new SearchTemplateParams(nameRegexp, lastInListName, size, SortOrder[sortOrder]));
  }
}
