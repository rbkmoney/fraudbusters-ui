import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { WbListRecords } from '../../../../../api/fb-management/swagger-codegen/model/wbListRecords';
import { LAYOUT_GAP_M, LAYOUT_GAP_S } from '../../../../../tokens';

@Component({
    selector: 'fb-wb-list-record',
    templateUrl: 'wb-list-record.component.html',
    styleUrls: ['wb-list-record.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WbListRecordComponent {
    @Input()
    record: WbListRecords;

    @Output()
    deleteItem = new EventEmitter<string>();

    constructor(@Inject(LAYOUT_GAP_S) public layoutGapS: string, @Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
