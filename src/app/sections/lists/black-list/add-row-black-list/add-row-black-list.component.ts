import { Component } from '@angular/core';

import { ListType } from '../../../../shared/constants/list-type';

@Component({
    templateUrl: './add-row-black-list.component.html',
    styleUrls: ['./add-row-black-list.component.scss'],
})
export class AddRowBlackListComponent {
    LIST_TYPE = ListType.black;
}
