import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { CheckedDataSetRow } from '../../../../../api/fb-management/swagger-codegen/model/checkedDataSetRow';
import { LAYOUT_GAP_M, LAYOUT_GAP_S } from '../../../../../tokens';

@Component({
    selector: 'fb-data-set-payment-item',
    templateUrl: 'data-set-payment-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataSetPaymentItemComponent {
    @Input()
    checkedDataSetRow: CheckedDataSetRow;

    constructor(@Inject(LAYOUT_GAP_S) public layoutGapS: string, @Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
