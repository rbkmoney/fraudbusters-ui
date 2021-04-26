import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { PaymentReferenceModel } from '../../../../../api/fb-management/swagger-codegen/model/paymentReferenceModel';
import { LAYOUT_GAP_M, LAYOUT_GAP_S } from '../../../../../tokens';

@Component({
    selector: 'fb-reference-item',
    templateUrl: 'reference-item.component.html',
    styleUrls: ['reference-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceItemComponent {
    @Input()
    reference: PaymentReferenceModel;

    @Output()
    goToTemplate = new EventEmitter<string>();

    @Output()
    deleteItem = new EventEmitter<PaymentReferenceModel>();

    constructor(@Inject(LAYOUT_GAP_S) public layoutGapS: string, @Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
