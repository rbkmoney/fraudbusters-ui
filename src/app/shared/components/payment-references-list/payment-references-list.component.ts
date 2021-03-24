import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { PaymentReferenceModel } from '../../../api/fb-management/swagger-codegen/model/paymentReferenceModel';
import { LAYOUT_GAP_M } from '../../../tokens';

@Component({
    selector: 'fb-payment-references-list',
    templateUrl: 'payment-references-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentReferencesListComponent {
    @Input()
    references: PaymentReferenceModel[];

    @Output()
    goToTemplate = new EventEmitter<string>();

    @Output()
    deleteItem = new EventEmitter<PaymentReferenceModel>();

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}

    onItemDelete(id: string) {
        this.deleteItem.emit(this.references.find((ref) => ref.id === id));
    }
}
