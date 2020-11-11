import { Component, OnInit } from '@angular/core';
import { ListType } from '../../../../shared/constants/list-type';

@Component({
    selector: 'app-add-row-white-list',
    templateUrl: './add-row-white-list.component.html',
    styleUrls: ['./add-row-white-list.component.scss'],
})
export class AddRowWhiteListComponent {
    LIST_TYPE = ListType.white;
}
