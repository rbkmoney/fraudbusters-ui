import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ListType } from '../../../shared/constants/list-type';

@Component({
    templateUrl: './black-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlackListComponent {
    LIST_TYPE = ListType.black;
}
