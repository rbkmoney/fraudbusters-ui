import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { PaymentEmulateFilter } from '../../../sections/emulation/template/model/payment-emulate-filter';
import { Template } from '../../../sections/templates-old/model/template';
import { IEmulationTemplateService } from './iemulation-template.service';

@Injectable()
export class PaymentEmulationTemplateService implements IEmulationTemplateService {
    private readonly fbManagementEndpoint = this.configService.fbManagementEndpoint;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    emulate(filter: PaymentEmulateFilter): Observable<Template[]> {
        return this.http.get<Template[]>(`${this.fbManagementEndpoint}/rules/`, {
            params: { shopId: filter.shopId, partyId: filter.partyId },
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
