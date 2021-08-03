import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../../../../tokens';

@Component({
    selector: 'fb-historical-data-chargeback-header',
    templateUrl: 'historical-data-chargeback-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalDataChargebackHeaderComponent {
    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
