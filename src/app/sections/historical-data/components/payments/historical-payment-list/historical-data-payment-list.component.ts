import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { Payment } from '../../../../../api/fb-management/swagger-codegen/model/payment';
import { LAYOUT_GAP_M } from '../../../../../tokens';

@Component({
    selector: 'fb-historical-data-payment-list',
    templateUrl: 'historical-data-payment-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalDataPaymentListComponent {
    @Input()
    payments: Payment[];

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
