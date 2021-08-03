import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { InspectResult } from '../../../../../../../api/fb-management/swagger-codegen/model/inspectResult';
import { LAYOUT_GAP_M, LAYOUT_GAP_S } from '../../../../../../../tokens';

@Component({
    selector: 'fb-historical-data-inspect-results-item',
    templateUrl: 'historical-data-inspect-results-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalDataInspectResultsItemComponent {
    @Input()
    inspectResult: InspectResult;

    constructor(@Inject(LAYOUT_GAP_S) public layoutGapS: string, @Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
