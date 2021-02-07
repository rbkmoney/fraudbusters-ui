import { Observable } from 'rxjs';

import { P2pEmulateFilter } from '../../../sections/emulation/template/model/p2p-emulate-filter';
import { PaymentEmulateFilter } from '../../../sections/emulation/template/model/payment-emulate-filter';
import { Template } from '../../../sections/template/types/template';

export interface IEmulationTemplateService {
    emulate(filter: PaymentEmulateFilter | P2pEmulateFilter): Observable<Template[]>;
}
