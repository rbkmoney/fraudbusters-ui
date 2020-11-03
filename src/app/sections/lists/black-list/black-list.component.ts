import { Component, OnInit } from '@angular/core';
import { ListType } from '../../../shared/constants/list-type';

@Component({
    selector: 'app-black-list',
    templateUrl: './black-list.component.html',
    styleUrls: ['./black-list.component.scss'],
})
export class BlackListComponent implements OnInit {
    LIST_TYPE = ListType.black;

    constructor() {}

    ngOnInit(): void {}
}
