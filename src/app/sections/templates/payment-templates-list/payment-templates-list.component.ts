import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'fb-payment-templates-list',
    templateUrl: 'payment-templates-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentTemplatesListComponent {}
