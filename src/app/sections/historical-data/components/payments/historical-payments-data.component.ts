import { DatePipe } from '@angular/common';
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
        public datepipe: DatePipe,
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
            from: this.datepipe.transform(event.from, 'yyyy-MM-dd HH:mm:ss'),
            to: this.datepipe.transform(event.to, 'yyyy-MM-dd HH:mm:ss'),
        });
    }

    fetchMore(sortFieldValue: string) {
        this.fetchPaymentsService.fetchMore({
            sortFieldValue,
        });
    }

    todayFromTime(): Date {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        return now;
    }
}
