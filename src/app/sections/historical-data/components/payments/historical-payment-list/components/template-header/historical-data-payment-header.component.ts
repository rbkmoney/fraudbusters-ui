import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { LAYOUT_GAP_M } from '../../../../../../../tokens';

@Component({
    selector: 'fb-historical-data-payment-header',
    templateUrl: 'historical-data-payment-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalDataPaymentHeaderComponent {
    @Output()
    changedAll: EventEmitter<MatCheckboxChange> = new EventEmitter<MatCheckboxChange>();

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}

    changeAll($event) {
        this.changedAll.emit($event);
    }
}
