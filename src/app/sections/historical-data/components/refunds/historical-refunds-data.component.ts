import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchHistoricalRefundsService } from '../../services/fetch-historical-refunds.service';

@Component({
    templateUrl: 'historical-refunds-data.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class HistoricalRefundsDataComponent {
    refunds$ = this.fetchPaymentsSefetchHistoricalRefundsServicevice.searchResult$;
    inProgress$ = this.fetchPaymentsSefetchHistoricalRefundsServicevice.inProgress$;
    hasMore$ = this.fetchPaymentsSefetchHistoricalRefundsServicevice.hasMore$;

    constructor(
        private fetchPaymentsSefetchHistoricalRefundsServicevice: FetchHistoricalRefundsService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.fetchPaymentsSefetchHistoricalRefundsServicevice.search({});
    }

    search(event) {
        this.fetchPaymentsSefetchHistoricalRefundsServicevice.search(this.initParams(event));
    }

    fetchMore(event) {
        this.fetchPaymentsSefetchHistoricalRefundsServicevice.fetchMore(this.initParams(event));
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
