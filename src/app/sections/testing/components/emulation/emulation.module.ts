import { NgModule } from '@angular/core';

import { PaymentEmulateService } from '../../../../api/payments/emulate';
import { ErrorHandlerService } from '../../../../shared/services/utils/error-handler.service';
import { EmulationTemplateService } from '../../services/emulation/emulation-template.service';
import { EmulationRoutingModule } from './emulation-routing.module';

@NgModule({
    imports: [EmulationRoutingModule],
    providers: [PaymentEmulateService, EmulationTemplateService, ErrorHandlerService],
})
export class EmulationModule {}
