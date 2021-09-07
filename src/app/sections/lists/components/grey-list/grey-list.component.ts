import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ListType } from '../../../../shared/constants/list-type';

@Component({
    templateUrl: './grey-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreyListComponent {
    LIST_TYPE = ListType.grey;
}
