import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchDataSetsService } from '../../services/payment-data-sets/fetch-data-sets.service';
import { RemoveDataSetsService } from '../../services/payment-data-sets/remove-data-sets.service';

@Component({
    templateUrl: 'payment-data-sets.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class PaymentDataSetsComponent {
    dataSets$ = this.fetchDataSetsService.searchResult$;

    private readonly yyyyMMDdHHMmSs = 'yyyy-MM-dd HH:mm:ss';

    inProgress$ = this.fetchDataSetsService.inProgress$;
    hasMore$ = this.fetchDataSetsService.hasMore$;

    constructor(
        private router: Router,
        private fetchDataSetsService: FetchDataSetsService,
        private removeDataSetsService: RemoveDataSetsService,
        public datePipe: DatePipe,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.removeDataSetsService.removed$.subscribe(() => {
            this.fetchDataSetsService.search({});
        });
    }

    createDataSet() {
        this.router.navigate(['/data-sets/new/payment']);
    }

    search(event) {
        this.fetchDataSetsService.search(this.initParams(event));
    }

    fetchMore(sortFieldValue: string) {
        this.fetchDataSetsService.fetchMore({});
    }

    goToDataSet(id: string) {
        this.router.navigate([`/data-sets/${id}/testing`]);
    }

    removeDataSet(idDataSet: string) {
        this.removeDataSetsService.remove({
            dataSet: {
                id: idDataSet,
            },
        });
    }

    private initParams(event) {
        return {
            searchValue: event.searchValue,
            from: this.datePipe.transform(new Date(event.from), this.yyyyMMDdHHMmSs),
            to: this.datePipe.transform(new Date(event.to), this.yyyyMMDdHHMmSs),
        };
    }
}
