import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { InspectResult } from '../../../../../api/fb-management/swagger-codegen/model/inspectResult';
import { LAYOUT_GAP_M } from '../../../../../tokens';

@Component({
    selector: 'fb-historical-data-inspect-results-list',
    templateUrl: 'historical-data-inspect-results-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalDataInspectResultsListComponent {
    @Input()
    inspectResults: InspectResult[];

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
