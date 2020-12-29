import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ListType } from '../../../../shared/constants/list-type';

@Component({
    templateUrl: './add-row-black-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddRowBlackListComponent {
    LIST_TYPE = ListType.black;
}
