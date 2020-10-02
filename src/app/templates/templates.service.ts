import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Template} from './model/template';
import {ConfigService} from '../core/config.service';
import {OperationType} from '../shared/constants/operation-type';
import {Observable} from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  // private readonly fbManagementEndpoint: string;

  constructor(private http: HttpClient, configService: ConfigService) {
    // this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
  }

  getTemplates(type: OperationType): Observable<Template[]> {
    // return this.http.get<Template[]>(`${this.fbManagementEndpoint}/template?limit=300`);
    return of([new Template('test', 'rule:sdfsdfsd->DECLINE')]);
  }
}
