import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { Payment } from '../../../../../api/fb-management/swagger-codegen/model/payment';
import { LAYOUT_GAP_M } from '../../../../../tokens';

@Component({
    selector: 'fb-historical-data-payment-list',
    templateUrl: 'historical-data-payment-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalDataPaymentListComponent {
    @Input()
    payments: Payment[];

    @Input()
    selectedPayments: Payment[];

    @Output()
    changed: EventEmitter<Payment[]> = new EventEmitter<Payment[]>();

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}

    onChange($event) {
        if (this.selectedPayments.includes($event)) {
            this.selectedPayments.splice(
                this.selectedPayments.findIndex((value) => Object.is(value, $event)),
                1
            );
        } else {
            this.selectedPayments.push($event);
        }
        this.changed.emit(this.selectedPayments);
    }

    onChangeAll($event) {
        if ($event.checked) {
            this.selectedPayments = Array.from(this.payments);
        } else {
            this.selectedPayments = new Array<Payment>();
        }
        this.changed.emit(this.selectedPayments);
    }
}
