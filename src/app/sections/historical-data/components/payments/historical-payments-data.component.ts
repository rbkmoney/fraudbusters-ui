import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

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
        private router: Router,
        private fetchPaymentsService: FetchHistoricalPaymentsService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.fetchPaymentsService.search({});
    }

    search(event) {
        this.fetchPaymentsService.search({
            paymentId: event.paymentId,
            cardToken: event.cardToken,
            shopId: event.shopId,
            partyId: event.partyId,
            status: event.status,
            fingerprint: event.fingerprint,
            email: event.email,
            from: event.from,
            to: event.to,
        });
    }

    fetchMore(event) {
        this.fetchPaymentsService.fetchMore({
            paymentId: event.paymentId,
            cardToken: event.cardToken,
            shopId: event.shopId,
            partyId: event.partyId,
            status: event.status,
            fingerprint: event.fingerprint,
            email: event.email,
            from: event.from,
            to: event.to,
        });
    }
}
