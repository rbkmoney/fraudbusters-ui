import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { LAYOUT_GAP_M, LAYOUT_GAP_S } from '../../../../../../../tokens';
import { Chargeback } from '../../../../../../../api/fb-management/swagger-codegen/model/chargeback';

@Component({
    selector: 'fb-historical-data-chargeback-item',
    templateUrl: 'historical-data-chargeback-item.component.html',
    styleUrls: ['historical-data-chargeback-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalDataChargebackItemComponent {
    @Input()
    chargeback: Chargeback;

    constructor(@Inject(LAYOUT_GAP_S) public layoutGapS: string, @Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
