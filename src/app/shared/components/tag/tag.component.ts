import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

import { ThemePaletteEnum } from '../../../styles/utils/theme-palette-enum';

@Component({
    selector: 'fb-tag',
    templateUrl: 'tag.component.html',
    styleUrls: ['tag.component.scss'],
})
export class TagComponent implements OnInit {
    @Input()
    title: string;

    @Input()
    color: ThemePaletteEnum = ThemePaletteEnum.Primary;

    @ViewChild('tag', { static: true })
    tag: ElementRef;

    constructor(private renderer: Renderer2) {}

    ngOnInit() {
        this.renderer.addClass(this.tag.nativeElement, `fb-tag-${this.color}`);
    }
}
