import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchHistoricalPaymentsService } from '../../services/fetch-historical-payments.service';

@Component({
    templateUrl: 'historical-payments-data.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class HistoricalPaymentsDataComponent {
    payments$ = this.fetchPaymentsService.searchResult$;
    inProgress$ = this.fetchPaymentsService.inProgress$;
    hasMore$ = this.fetchPaymentsService.hasMore$;

    constructor(
        private fetchPaymentsService: FetchHistoricalPaymentsService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.fetchPaymentsService.search({});
    }

    search(event) {
        this.fetchPaymentsService.search(this.initParams(event));
    }

    fetchMore(event) {
        this.fetchPaymentsService.fetchMore(this.initParams(event));
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
