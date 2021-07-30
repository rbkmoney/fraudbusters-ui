import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { LAYOUT_GAP_M } from '../../../../../tokens';
import { Chargeback } from '../../../../../api/fb-management/swagger-codegen/model/chargeback';

@Component({
    selector: 'fb-historical-data-chargeback-list',
    templateUrl: 'historical-data-chargeback-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalDataChargebackListComponent {
    @Input()
    chargebacks: Chargeback[];

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
