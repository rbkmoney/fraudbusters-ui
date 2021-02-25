import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { TemplateModel } from '../../../../../api/fb-management/swagger-codegen/model/templateModel';
import { LAYOUT_GAP_M } from '../../../../../tokens';

@Component({
    selector: 'fb-template-item',
    templateUrl: 'template-item.component.html',
    styleUrls: ['template-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateItemComponent {
    @Input()
    template: TemplateModel;

    @Output()
    editItem = new EventEmitter<string>();

    @Output()
    deleteItem = new EventEmitter<string>();

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
