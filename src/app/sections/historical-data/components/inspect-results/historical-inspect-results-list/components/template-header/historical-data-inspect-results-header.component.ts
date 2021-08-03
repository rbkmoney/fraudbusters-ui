import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../../../../tokens';

@Component({
    selector: 'fb-historical-data-inspect-results-header',
    templateUrl: 'historical-data-inspect-results-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalDataInspectResultsHeaderComponent {
    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
