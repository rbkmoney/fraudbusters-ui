import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { Payment } from '../../../../../../../api/fb-management/swagger-codegen/model/payment';
import { LAYOUT_GAP_M, LAYOUT_GAP_S } from '../../../../../../../tokens';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
    selector: 'fb-historical-data-payment-item',
    templateUrl: 'historical-data-payment-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalDataPaymentItemComponent {
    @Input()
    payment: Payment;

    @Output()
    changed: EventEmitter<Payment> = new EventEmitter<Payment>();

    @Input()
    enabled = false;

    constructor(@Inject(LAYOUT_GAP_S) public layoutGapS: string, @Inject(LAYOUT_GAP_M) public layoutGapM: string) {}

    emmitChange() {
        this.enabled = !this.enabled;
        this.changed.emit(this.payment);
    }
}
