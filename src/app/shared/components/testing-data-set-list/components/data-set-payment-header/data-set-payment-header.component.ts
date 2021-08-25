import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { LAYOUT_GAP_M } from '../../../../../tokens';

@Component({
    selector: 'fb-data-set-payment-header',
    templateUrl: 'data-set-payment-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataSetPaymentHeaderComponent {
    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
