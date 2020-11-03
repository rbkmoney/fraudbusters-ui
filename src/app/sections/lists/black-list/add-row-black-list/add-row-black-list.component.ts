import { Component, OnInit } from '@angular/core';
import { ListType } from '../../../../shared/constants/list-type';

@Component({
    selector: 'app-add-row-black-list',
    templateUrl: './add-row-black-list.component.html',
    styleUrls: ['./add-row-black-list.component.scss'],
})
export class AddRowBlackListComponent implements OnInit {
    LIST_TYPE = ListType.black;

    constructor() {}

    ngOnInit(): void {}
}
