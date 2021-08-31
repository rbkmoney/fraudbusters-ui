import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchHistoricalChargebacksService } from '../../services/fetch-historical-chargebacks.service';

@Component({
    templateUrl: 'historical-chargebacks-data.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class HistoricalChargebacksDataComponent {
    chargebacks$ = this.fetchHistoricalChargebacksService.searchResult$;
    inProgress$ = this.fetchHistoricalChargebacksService.inProgress$;
    hasMore$ = this.fetchHistoricalChargebacksService.hasMore$;

    constructor(
        private fetchHistoricalChargebacksService: FetchHistoricalChargebacksService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    search(event) {
        this.fetchHistoricalChargebacksService.search(this.initParams(event));
    }

    fetchMore(event) {
        this.fetchHistoricalChargebacksService.fetchMore(this.initParams(event));
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
