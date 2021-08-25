import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { DataSet } from '../../../../../../../api/fb-management/swagger-codegen/model/dataSet';
import { LAYOUT_GAP_M, LAYOUT_GAP_S } from '../../../../../../../tokens';

@Component({
    selector: 'fb-payment-data-set-item',
    templateUrl: 'payment-data-set-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentDataSetItemComponent {
    @Input()
    dataSet: DataSet;

    @Output()
    editItem = new EventEmitter<string>();

    @Output()
    deleteItem = new EventEmitter<string>();

    constructor(@Inject(LAYOUT_GAP_S) public layoutGapS: string, @Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
