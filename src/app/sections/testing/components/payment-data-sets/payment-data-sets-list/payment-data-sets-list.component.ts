import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { DataSet } from '../../../../../api/fb-management/swagger-codegen/model/dataSet';
import { LAYOUT_GAP_M } from '../../../../../tokens';

@Component({
    selector: 'fb-payment-data-sets-list',
    templateUrl: 'payment-data-sets-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentDataSetsListComponent {
    @Input()
    dataSets: DataSet[];

    @Output()
    goToDataSet = new EventEmitter<string>();

    @Output()
    deleteItem = new EventEmitter<string>();

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
