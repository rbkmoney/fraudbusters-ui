import { NgModule } from '@angular/core';

import { EmulationRoutingModule } from './emulation-routing.module';
import { PaymentEmulateService } from '../../../../api/payments/emulate';
import { EmulationTemplateService } from '../../services/emulation/emulation-template.service';
import { ErrorHandlerService } from '../../../../shared/services/utils/error-handler.service';

@NgModule({
    imports: [EmulationRoutingModule],
    providers: [PaymentEmulateService, EmulationTemplateService, ErrorHandlerService],
})
export class EmulationModule {}
