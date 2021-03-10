import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { WbListRecords } from '../../../api/fb-management/swagger-codegen/model/wbListRecords';
import { LAYOUT_GAP_M } from '../../../tokens';
import { SortOrder } from '../../constants/sort-order';
import { Action, ActionType } from './action';

@Component({
    selector: 'fb-wb-list',
    templateUrl: 'wb-list.component.html',
})
export class WbListComponent {
    @Input()
    records: WbListRecords[];

    @Output()
    action = new EventEmitter<Action>();

    actionType = ActionType;

    displayedColumns = ['listName', 'partyID', 'shopID', 'value', 'insertTime'];

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}

    sort(sort: Sort): void {
        switch (sort.direction) {
            case 'asc':
                this.action.emit({ type: ActionType.sortList, sortDirection: SortOrder.ASC });
                break;
            case 'desc':
                this.action.emit({ type: ActionType.sortList, sortDirection: SortOrder.DESC });
                break;
        }
    }
}
