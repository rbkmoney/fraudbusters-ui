import { Component, OnInit } from '@angular/core';
import { ListType } from '../../../shared/constants/list-type';

@Component({
    selector: 'app-grey-list',
    templateUrl: './grey-list.component.html',
    styleUrls: ['./grey-list.component.scss'],
})
export class GreyListComponent implements OnInit {
    LIST_TYPE = ListType.grey;

    constructor() {}

    ngOnInit(): void {}
}
