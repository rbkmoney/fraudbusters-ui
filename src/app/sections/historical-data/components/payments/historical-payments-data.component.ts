import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LAYOUT_GAP_M } from '../../../../tokens';
import { OperationType } from '../../../../shared/constants/operation-type';
import { FetchPaymentsService } from '../../services/fetch-payments.service';

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
        private fetchPaymentsService: FetchPaymentsService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    search(searchValue: string) {
        this.fetchPaymentsService.search({
            type: OperationType.Payment,
            searchValue,
            isGlobal: false,
            isDefault: false,
        });
    }

    fetchMore(sortFieldValue: string) {
        this.fetchPaymentsService.fetchMore({
            type: OperationType.Payment,
            sortFieldValue,
            isGlobal: false,
            isDefault: false,
        });
    }
}
