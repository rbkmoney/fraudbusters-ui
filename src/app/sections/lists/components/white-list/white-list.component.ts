import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ListType } from '../../../../shared/constants/list-type';

@Component({
    templateUrl: './white-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhiteListComponent {
    LIST_TYPE = ListType.white;
}
