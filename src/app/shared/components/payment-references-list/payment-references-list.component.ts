import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../tokens';
import { PaymentReference } from '../../../api/fb-management/swagger-codegen/model/paymentReference';

@Component({
    selector: 'fb-payment-references-list',
    templateUrl: 'payment-references-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentReferencesListComponent {
    @Input()
    references: PaymentReference[];

    @Output()
    goToTemplate = new EventEmitter<string>();

    @Output()
    deleteItem = new EventEmitter<PaymentReference>();

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
