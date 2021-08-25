import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { EmulationTemplateService } from '../../../services/emulation/emulation-template.service';
import { PaymentEmulateFilter } from './model/payment-emulate-filter';
import { LAYOUT_GAP_M } from '../../../../../tokens';

@Component({
    templateUrl: './emulation-template.component.html',
    styleUrls: ['./emulation-template.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmulationTemplateComponent {
    templates$ = this.emulationTemplateService.templates$;

    filter: PaymentEmulateFilter;

    constructor(
        private emulationTemplateService: EmulationTemplateService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.initFilter();
    }

    initFilter(): void {
        this.filter = { partyId: '', shopId: '' };
    }

    emulate(): void {
        this.emulationTemplateService.emulateNext(this.filter);
    }
}
