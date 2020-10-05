import {Injectable} from '@angular/core';
import {ITemplatesService} from '../itemplates.service';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../../../../core/config.service';
import {SearchTemplateParams} from '../model/SearchTemplateParams';
import {Observable} from 'rxjs';
import {Template} from '../../../../templates/model/template';
import {ParamsUtilService} from '../../utils/params-util.service';


@Injectable({
  providedIn: 'root'
})
export class P2pTemplatesService implements ITemplatesService {

  private readonly fbManagementEndpoint: string;

  constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
    this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
  }

  findTemplates(params?: SearchTemplateParams): Observable<Template[]> {    // Initialize Params Object
    return this.http.get<Template[]>(`${this.fbManagementEndpoint}/p2p/template`, {
      params: this.paramsUtilService.filterParameters(params),
    });
  }

}
