import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { LAYOUT_GAP_M, LAYOUT_GAP_S } from '../../../../../../../tokens';
import { InspectResult } from '../../../../../../../api/fb-management/swagger-codegen/model/inspectResult';

@Component({
    selector: 'fb-historical-data-inspect-results-item',
    templateUrl: 'historical-data-inspect-results-item.component.html',
    styleUrls: ['historical-data-inspect-results-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalDataInspectResultsItemComponent {
    @Input()
    inspectResult: InspectResult;

    constructor(@Inject(LAYOUT_GAP_S) public layoutGapS: string, @Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
