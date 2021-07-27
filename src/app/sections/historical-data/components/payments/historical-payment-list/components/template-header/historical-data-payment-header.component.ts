import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../../../../tokens';

@Component({
    selector: 'fb-historical-data-payment-header',
    templateUrl: 'historical-data-payment-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalDataPaymentHeaderComponent {
    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
