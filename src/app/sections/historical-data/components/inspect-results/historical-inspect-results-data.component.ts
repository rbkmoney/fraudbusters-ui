import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchHistoricalInspectResultsService } from '../../services/fetch-historical-inspect-results.service';

@Component({
    templateUrl: 'historical-inspect-results-data.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class HistoricalInspectResultsDataComponent {
    inspectResults$ = this.fetchHistoricalInspectResultsService.searchResult$;
    inProgress$ = this.fetchHistoricalInspectResultsService.inProgress$;
    hasMore$ = this.fetchHistoricalInspectResultsService.hasMore$;

    constructor(
        private fetchHistoricalInspectResultsService: FetchHistoricalInspectResultsService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    search(event) {
        this.fetchHistoricalInspectResultsService.search(this.initParams(event));
    }

    fetchMore(event) {
        this.fetchHistoricalInspectResultsService.fetchMore(this.initParams(event));
    }

    private initParams(event) {
        return {
            paymentId: event.paymentId,
            cardToken: event.cardToken,
            shopId: event.shopId,
            partyId: event.partyId,
            status: event.status,
            fingerprint: event.fingerprint,
            email: event.email,
            terminal: event.terminal,
            maskedPan: event.maskedPan,
            from: event.from,
            to: event.to,
        };
    }
}
