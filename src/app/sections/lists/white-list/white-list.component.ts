import { Component } from '@angular/core';

import { ListType } from '../../../shared/constants/list-type';

@Component({
    templateUrl: './white-list.component.html',
    styleUrls: ['./white-list.component.scss'],
})
export class WhiteListComponent {
    LIST_TYPE = ListType.white;
}
