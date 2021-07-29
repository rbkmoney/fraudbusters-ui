import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
    selector: 'fb-show-more-panel',
    templateUrl: 'show-more-panel.component.html',
    styleUrls: ['show-more-panel.component.scss'],
})
export class ShowMorePanelComponent {
    @Input()
    isLoading = false;

    @Output()
    showMore: EventEmitter<Params> = new EventEmitter();

    constructor(private route: ActivatedRoute) {
        this.route.queryParams.pipe(take(1)).subscribe((v) => this.showMore.emit(v));
    }

    getMore() {
        this.showMore.emit();
    }
}
