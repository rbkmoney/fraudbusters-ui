import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { Template } from '../../../templates-old/model/template';
import { Action, Actions } from '../../action';

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

    sortData(sort: Sort): void {
        // this.sortType = sort.direction === 'asc' ? SortOrder.ASC : SortOrder.DESC;
        // this.search();
    }

    removeTemplate(templateID: string): void {
        this.action.emit({ type: Actions.removeTemplate, templateID });
    }

    editTemplate(templateID: string) {
        this.action.emit({ type: Actions.editTemplate, templateID });
    }
}
