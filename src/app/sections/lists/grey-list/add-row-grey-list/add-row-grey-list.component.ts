import { Component } from '@angular/core';
import { ListType } from '../../../../shared/constants/list-type';

@Component({
    selector: 'app-add-row-grey-list',
    templateUrl: './add-row-grey-list.component.html',
    styleUrls: ['./add-row-grey-list.component.scss'],
})
export class AddRowGreyListComponent {
    LIST_TYPE = ListType.grey;
}
