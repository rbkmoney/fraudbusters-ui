import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { Template } from '../../../../../api/fb-management/swagger-codegen/model/template';
import { LAYOUT_GAP_M, LAYOUT_GAP_S } from '../../../../../tokens';

@Component({
    selector: 'fb-template-item',
    templateUrl: 'template-item.component.html',
    styleUrls: ['template-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateItemComponent {
    @Input()
    template: Template;

    @Output()
    editItem = new EventEmitter<string>();

    @Output()
    deleteItem = new EventEmitter<string>();

    constructor(@Inject(LAYOUT_GAP_S) public layoutGapS: string, @Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
