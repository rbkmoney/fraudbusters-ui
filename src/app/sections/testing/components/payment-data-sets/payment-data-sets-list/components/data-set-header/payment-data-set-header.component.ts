import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../../../../tokens';

@Component({
    selector: 'fb-payment-data-set-header',
    templateUrl: 'payment-data-set-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentDataSetHeaderComponent {
    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
