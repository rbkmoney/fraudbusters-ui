import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchHistoricalFraudPaymentsService } from '../../services/fetch-historical-fraud-payments.service';

@Component({
    templateUrl: 'historical-fraud-payments-data.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class HistoricalFraudPaymentsDataComponent {
    fraudPayments$ = this.fetchHistoricalFraudPaymentsService.searchResult$;
    inProgress$ = this.fetchHistoricalFraudPaymentsService.inProgress$;
    hasMore$ = this.fetchHistoricalFraudPaymentsService.hasMore$;

    constructor(
        private fetchHistoricalFraudPaymentsService: FetchHistoricalFraudPaymentsService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.fetchHistoricalFraudPaymentsService.search({});
    }

    search(event) {
        this.fetchHistoricalFraudPaymentsService.search(this.initParams(event));
    }

    fetchMore(event) {
        this.fetchHistoricalFraudPaymentsService.fetchMore(this.initParams(event));
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
