import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { SortOrder } from '../../../../shared/constants/sort-order';
import { Reference } from '../../../reference/model/reference';
import { Action, ActionType } from '../../action';

@Component({
    templateUrl: 'references-table.component.html',
    selector: 'fb-references-table',
    styleUrls: ['references-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferencesTableComponent {
    @Output()
    action: EventEmitter<Action> = new EventEmitter();

    @Input()
    references: Reference[];

    displayedColumns: string[] = ['id', 'templateID', 'partyID', 'shopID', 'updatedAt', 'actions'];

    sort(sort: Sort): void {
        switch (sort.direction) {
            case 'asc':
                this.action.emit({ type: ActionType.sortReferences, sortDirection: SortOrder.ASC });
                break;
            case 'desc':
                this.action.emit({ type: ActionType.sortReferences, sortDirection: SortOrder.DESC });
                break;
        }
    }

    removeReference(reference: Reference): void {
        this.action.emit({ type: ActionType.removeReference, reference });
    }

    editReference(reference: Reference) {
        this.action.emit({ type: ActionType.editReference, reference });
    }

    goToTempalte(reference: Reference) {
        this.action.emit({ type: ActionType.goToTemplate, reference });
    }
}
