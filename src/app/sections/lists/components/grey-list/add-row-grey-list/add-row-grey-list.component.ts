import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ListType } from '../../../../../shared/constants/list-type';

@Component({
    templateUrl: './add-row-grey-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddRowGreyListComponent {
    LIST_TYPE = ListType.grey;
}
