import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentEmulateFilter } from '../../../sections/emulation/template/model/payment-emulate-filter';
import { Template } from '../../../sections/templates/model/template';
import { IEmulationTemplateService } from './iemulation-template.service';
import { HttpClient } from '@angular/common/http';
import { ParamsUtilService } from '../utils/params-util.service';
import { ConfigService } from '../../../core/config.service';

@Injectable()
export class PaymentEmulationTemplateService implements IEmulationTemplateService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
        this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
    }

    emulate(filter: PaymentEmulateFilter): Observable<Template[]> {
        return this.http.get<Template[]>(`${this.fbManagementEndpoint}/rules/`, {
            params: { shopId: filter.shopId, partyId: filter.partyId },
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
