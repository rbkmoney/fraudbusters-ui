import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
    selector: 'fb-show-more-continuation-panel',
    templateUrl: 'show-more-continuation-panel.component.html',
    styleUrls: ['show-more-continuation-panel.component.scss'],
})
export class ShowMoreContinuationPanelComponent {
    @Input()
    isLoading = false;

    @Output()
    showMore: EventEmitter<Params> = new EventEmitter();

    queryParams = {};

    constructor(private route: ActivatedRoute) {
        this.route.queryParams.pipe(take(1)).subscribe((v) => (this.queryParams = v));
    }

    getMore() {
        this.showMore.emit(this.queryParams);
    }
}
