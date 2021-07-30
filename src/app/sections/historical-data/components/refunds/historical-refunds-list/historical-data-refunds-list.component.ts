import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { LAYOUT_GAP_M } from '../../../../../tokens';
import { Refund } from '../../../../../api/fb-management/swagger-codegen/model/refund';

@Component({
    selector: 'fb-historical-data-payment-list',
    templateUrl: 'historical-data-refunds-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalDataRefundsListComponent {
    @Input()
    refunds: Refund[];

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
