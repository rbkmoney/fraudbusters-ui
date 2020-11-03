import { Component, OnInit } from '@angular/core';
import { ListType } from '../../../shared/constants/list-type';

@Component({
    selector: 'app-white-list',
    templateUrl: './white-list.component.html',
    styleUrls: ['./white-list.component.scss'],
})
export class WhiteListComponent implements OnInit {
    LIST_TYPE = ListType.white;

    constructor() {}

    ngOnInit(): void {}
}
