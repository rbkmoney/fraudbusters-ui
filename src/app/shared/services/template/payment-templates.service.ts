import { Injectable } from '@angular/core';
import { ITemplatesService } from './itemplates.service';
import { Template } from '../../../templates/model/template';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/config.service';
import { Observable } from 'rxjs';
import { SearchTemplateParams } from './model/SearchTemplateParams';
import { ParamsUtilService } from '../utils/params-util.service';

@Injectable({
    providedIn: 'root',
})
export class PaymentTemplatesService implements ITemplatesService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
        this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
    }

    findTemplates(params?: SearchTemplateParams): Observable<Template[]> {
        return this.http.get<Template[]>(`${this.fbManagementEndpoint}/template`, {
            params: this.paramsUtilService.filterParameters(params),
        });
    }
}
