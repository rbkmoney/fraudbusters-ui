import { Observable } from 'rxjs';
import { Template } from '../../../sections/templates/model/template';
import { PaymentEmulateFilter } from '../../../sections/emulation/template/model/payment-emulate-filter';
import { P2pEmulateFilter } from '../../../sections/emulation/template/model/p2p-emulate-filter';

export interface IEmulationTemplateService {
    emulate(filter: PaymentEmulateFilter | P2pEmulateFilter): Observable<Template[]>;
}
