import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'fb-header-item',
    templateUrl: 'header-item.component.html',
    styleUrls: ['panel-list.component.scss'],
})
export class HeaderItemComponent {
    constructor(private location: Location) {}

    // 1 and 2 is default history length
    isBackAvailable = window.history.length > 2;

    back() {
        this.location.back();
    }
}
