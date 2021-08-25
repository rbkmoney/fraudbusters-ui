import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { CheckedDataSet } from '../../../api/fb-management/swagger-codegen/model/checkedDataSet';
import { LAYOUT_GAP_M } from '../../../tokens';

@Component({
    selector: 'fb-testing-data-data-set-list',
    templateUrl: 'testing-data-set-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestingDataSetListComponent {
    @Input()
    dataSet: CheckedDataSet;

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
