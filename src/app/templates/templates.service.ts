import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Template} from './model/template';
import {ConfigService} from '../core/config.service';
import {OperationType} from '../shared/constants/operation-type';
import {Observable, of} from 'rxjs';

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
    switch (type) {
      case OperationType.Payment:
        return of([new Template('test_payment', 'rule:sdfsdfsd->DECLINE')]);
      case OperationType.PeerToPeer:
        return of([new Template('test_p2p', 'rule:sdfsdfsd->ACCEPT')]);
      default:
        return of([]);
    }
  }
}
