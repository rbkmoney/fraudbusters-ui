import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EmulationTemplateService } from './emulation-template.service';
import { PaymentEmulateFilter } from './model/payment-emulate-filter';

@Component({
    templateUrl: './emulation-template.component.html',
    styleUrls: ['./emulation-template.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmulationTemplateComponent {
    templates$ = this.emulationTemplateService.templates$;

    filter: PaymentEmulateFilter;

    constructor(private emulationTemplateService: EmulationTemplateService) {
        this.initFilter();
    }

    initFilter(): void {
        this.filter = { partyId: '', shopId: '' };
    }

    emulate(): void {
        this.emulationTemplateService.emulateNext(this.filter);
    }
}
