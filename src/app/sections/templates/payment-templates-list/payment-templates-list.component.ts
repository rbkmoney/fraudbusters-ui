import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { LAYOUT_GAP_M } from '../../../tokens';
import { Template } from '../../../api/fb-management/swagger-codegen/model/template';

@Component({
    selector: 'fb-payment-templates-list',
    templateUrl: 'payment-templates-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentTemplatesListComponent {
    @Input()
    templates: Template[];

    @Output()
    editItem = new EventEmitter<string>();

    @Output()
    deleteItem = new EventEmitter<string>();

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
