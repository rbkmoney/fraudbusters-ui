import { Component } from '@angular/core';
import { ListType } from '../../../shared/constants/list-type';

@Component({
    selector: 'app-white-list',
    templateUrl: './white-list.component.html',
    styleUrls: ['./white-list.component.scss'],
})
export class WhiteListComponent {
    LIST_TYPE = ListType.white;
}
