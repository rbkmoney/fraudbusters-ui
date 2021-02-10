import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TemplateModel } from '../../../api/fb-management/swagger-codegen/model/templateModel';
import { ConfigService } from '../../../config';
import { PaymentEmulateFilter } from '../../../sections/emulation/template/model/payment-emulate-filter';
import { IEmulationTemplateService } from './iemulation-template.service';

@Injectable()
export class PaymentEmulationTemplateService implements IEmulationTemplateService {
    private readonly fbManagementEndpoint = this.configService.fbManagementEndpoint;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    emulate(filter: PaymentEmulateFilter): Observable<TemplateModel[]> {
        return this.http.get<TemplateModel[]>(`${this.fbManagementEndpoint}/rules/`, {
            params: { shopId: filter.shopId, partyId: filter.partyId },
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
