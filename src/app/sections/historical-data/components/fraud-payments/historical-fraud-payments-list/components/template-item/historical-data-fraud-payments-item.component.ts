import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { FraudPayment } from '../../../../../../../api/fb-management/swagger-codegen/model/fraudPayment';
import { LAYOUT_GAP_M, LAYOUT_GAP_S } from '../../../../../../../tokens';

@Component({
    selector: 'fb-historical-data-fraud-payments-item',
    templateUrl: 'historical-data-fraud-payments-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalDataFraudPaymentsItemComponent {
    @Input()
    fraudPayment: FraudPayment;

    constructor(@Inject(LAYOUT_GAP_S) public layoutGapS: string, @Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
