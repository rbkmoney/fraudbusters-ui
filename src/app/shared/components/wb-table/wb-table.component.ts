import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { WbListRecords } from '../../../api/fb-management/swagger-codegen/model/wbListRecords';
import { SortOrder } from '../../constants/sort-order';
import { ActionType } from './action';

@Component({
    selector: 'fb-wb-table',
    templateUrl: 'wb-table.component.html',
})
export class WbTableComponent {
    @Input()
    list: WbListRecords;

    @Output()
    action = new EventEmitter();

    displayedColumns = ['listName', 'partyID', 'shopID', 'value', 'insertTime'];

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
