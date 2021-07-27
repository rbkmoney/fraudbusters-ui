import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { Payment } from '../../../../../../../api/fb-management/swagger-codegen/model/payment';
import { LAYOUT_GAP_M, LAYOUT_GAP_S } from '../../../../../../../tokens';

@Component({
    selector: 'fb-historical-data-payment-item',
    templateUrl: 'historical-data-payment-item.component.html',
    styleUrls: ['historical-data-payment-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalDataPaymentItemComponent {
    @Input()
    payment: Payment;

    constructor(@Inject(LAYOUT_GAP_S) public layoutGapS: string, @Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
