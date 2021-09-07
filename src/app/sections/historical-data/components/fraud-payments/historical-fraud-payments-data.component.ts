import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchHistoricalFraudPaymentsService } from '../../services/fetch-historical-fraud-payments.service';
import { Router } from '@angular/router';

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
        private router: Router,
        private fetchHistoricalFraudPaymentsService: FetchHistoricalFraudPaymentsService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    search(event) {
        this.fetchHistoricalFraudPaymentsService.search(this.initParams(event));
    }

    fetchMore(event) {
        this.fetchHistoricalFraudPaymentsService.fetchMore(this.initParams(event));
    }

    loadFraudPayments() {
        this.router.navigate([`/load/fraud`]);
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
