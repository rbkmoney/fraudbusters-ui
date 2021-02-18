import { Component, Input } from '@angular/core';

@Component({
    selector: 'fb-tag',
    templateUrl: 'tag.component.html',
    styleUrls: ['tag.component.scss'],
})
export class TagComponent {
    @Input()
    title: string;

    @Input()
    colorClass: string;
}
