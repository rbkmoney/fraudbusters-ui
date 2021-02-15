import { Observable } from 'rxjs';

import { TemplateModel } from '../../../api/fb-management/swagger-codegen/model/templateModel';
import { P2pEmulateFilter } from '../../../sections/emulation/template/model/p2p-emulate-filter';
import { PaymentEmulateFilter } from '../../../sections/emulation/template/model/payment-emulate-filter';

export interface IEmulationTemplateService {
    emulate(filter: PaymentEmulateFilter | P2pEmulateFilter): Observable<TemplateModel[]>;
}
