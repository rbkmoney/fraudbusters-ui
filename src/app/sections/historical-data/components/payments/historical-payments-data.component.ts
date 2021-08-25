import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchHistoricalPaymentsService } from '../../services/fetch-historical-payments.service';
import { Payment } from '../../../../api/fb-management/swagger-codegen/model/payment';
import { DataSetService } from '../../../../api/payments/data-set';
import { ProfileService } from '../../../../container/services/profile/profile.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'historical-payments-data.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class HistoricalPaymentsDataComponent {
    payments$ = this.fetchPaymentsService.searchResult$;
    inProgress$ = this.fetchPaymentsService.inProgress$;
    hasMore$ = this.fetchPaymentsService.hasMore$;

    selectedPayments$: Array<Payment> = new Array<Payment>();

    constructor(
        private router: Router,
        private profileService: ProfileService,
        private fetchPaymentsService: FetchHistoricalPaymentsService,
        private dataSetService: DataSetService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    search(event) {
        this.fetchPaymentsService.search(this.initParams(event));
    }

    fetchMore(event) {
        this.fetchPaymentsService.fetchMore(this.initParams(event));
    }

    checkPayments($event) {
        this.selectedPayments$ = $event;
    }

    createDataSet() {
        this.dataSetService
            .saveDataSets({
                name: this.profileService.getUsername() + '_' + new Date().toISOString(),
                rows: this.selectedPayments$.map((val) => ({
                    payment: val,
                })),
            })
            .subscribe((value) => this.router.navigate([`../data-sets/${value}/testing`]));
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
