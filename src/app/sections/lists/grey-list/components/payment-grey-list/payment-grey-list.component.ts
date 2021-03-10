import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { WbListRecords } from '../../../../../api/fb-management/swagger-codegen/model/wbListRecords';
import { Action, ActionType } from '../../../../../shared/components/wb-list/action';
import { OperationType } from '../../../../../shared/constants/operation-type';
import { LAYOUT_GAP_S } from '../../../../../tokens';
import { FetchPaymentGreyListService } from '../../services/fetch-payment-grey-list.service';
import { RemoveListRecordService } from '../../services/remove-list-record.service';
import ListTypeEnum = WbListRecords.ListTypeEnum;

@Component({
    templateUrl: 'payment-grey-list.component.html',
    providers: [FetchPaymentGreyListService, RemoveListRecordService],
})
export class PaymentGreyListComponent {
    list$ = this.fetchPaymentGreyListService.searchResult$;
    hasMore$ = this.fetchPaymentGreyListService.hasMore$;
    inProgress$ = this.fetchPaymentGreyListService.inProgress$;

    operationType = OperationType;

    constructor(
        private fetchPaymentGreyListService: FetchPaymentGreyListService,
        private router: Router,
        private removeListRowService: RemoveListRecordService,
        @Inject(LAYOUT_GAP_S) public layoutGapS: string
    ) {
        this.removeListRowService.removed$.subscribe(() => {
            this.fetchPaymentGreyListService.search({ listType: 'grey', listNames: [] });
        });
    }

    action(action: Action) {
        switch (action.type) {
            case ActionType.createRecord:
                this.router.navigate(['/lists/grey/new'], { fragment: OperationType.Payment });
                break;
            case ActionType.editRecord:
                this.router.navigate([`/template/${action.templateID}`], { fragment: OperationType.Payment });
                break;
            case ActionType.removeRecord:
                this.removeListRowService.removeRecord(action.recordID);
                break;
            case ActionType.sortList:
                this.fetchPaymentGreyListService.search({
                    sortBy: action.sortDirection,
                    listNames: [],
                    listType: ListTypeEnum.Grey,
                });
                break;
            default:
                console.error('Wrong list action.');
        }
    }

    createRecord() {
        this.action({ type: ActionType.createRecord });
    }

    fetchMore() {
        this.fetchPaymentGreyListService.fetchMore();
    }

    search($event) {
        this.fetchPaymentGreyListService.search({
            searchValue: $event.searchQuery,
            listNames: [$event.listName],
            listType: ListTypeEnum.Grey,
        });
    }
}
