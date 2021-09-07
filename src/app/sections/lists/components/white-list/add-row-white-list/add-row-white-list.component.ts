import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ListType } from '../../../../../shared/constants/list-type';

@Component({
    templateUrl: './add-row-white-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddRowWhiteListComponent {
    LIST_TYPE = ListType.white;
}
