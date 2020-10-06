import {Injectable} from '@angular/core';
import {ITemplatesService} from './itemplates.service';
import {Template} from '../../../templates/model/template';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../../../core/config.service';
import {Observable} from 'rxjs';
import {SearchTemplateParams} from './model/SearchTemplateParams';
import {ParamsUtilService} from '../utils/params-util.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentTemplatesService implements ITemplatesService {

  private readonly fbManagementEndpoint: string;

  constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
    this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
  }

  findTemplates(params?: SearchTemplateParams): Observable<Template[]> {
    return this.http.get<Template[]>(`${this.fbManagementEndpoint}/template/filter/`, {
      params: this.paramsUtilService.filterParameters(params),
    });
  }

  deleteTemplate(template: Template): Observable<string> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      body: template,
      mode: 'no-cors'
    };
    return this.http.delete<string>(`${this.fbManagementEndpoint}/template`, options);
  }

}
