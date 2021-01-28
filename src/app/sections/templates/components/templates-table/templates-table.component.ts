import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { SortOrder } from '../../../../shared/constants/sort-order';
import { Template } from '../../../template/model/template';
import { Action, ActionType } from '../../action';

@Component({
    templateUrl: 'templates-table.component.html',
    selector: 'fb-templates-table',
    styleUrls: ['templates-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatesTableComponent {
    @Output()
    action: EventEmitter<Action> = new EventEmitter();

    @Input()
    templates: Template[];

    displayedColumns: string[] = ['id', 'template', 'updatedAt', 'actions'];

    sort(sort: Sort): void {
        switch (sort.direction) {
            case 'asc':
                this.action.emit({ type: ActionType.sortTemplates, sortDirection: SortOrder.ASC });
                break;
            case 'desc':
                this.action.emit({ type: ActionType.sortTemplates, sortDirection: SortOrder.DESC });
                break;
        }
    }

    removeTemplate(templateID: string): void {
        this.action.emit({ type: ActionType.removeTemplate, templateID });
    }

    editTemplate(templateID: string) {
        this.action.emit({ type: ActionType.editTemplate, templateID });
    }
}
