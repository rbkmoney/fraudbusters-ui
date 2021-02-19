import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WbListRecords } from '../../../../../api/fb-management/swagger-codegen/model/wbListRecords';
import { Action, ActionType } from '../../../../../shared/components/wb-table/action';
import { OperationType } from '../../../../../shared/constants/operation-type';
import { FetchPaymentGreyListService } from '../../services/fetch-payment-grey-list.service';
import ListTypeEnum = WbListRecords.ListTypeEnum;

@Component({
    templateUrl: 'payment-grey-list.component.html',
    providers: [FetchPaymentGreyListService],
})
export class PaymentGreyListComponent {
    list$ = this.fetchPaymentGreyListService.searchResult$;
    hasMore$ = this.fetchPaymentGreyListService.hasMore$;
    inProgress$ = this.fetchPaymentGreyListService.inProgress$;

    constructor(private fetchPaymentGreyListService: FetchPaymentGreyListService, private router: Router) {}

    action(action: Action) {
        switch (action.type) {
            case ActionType.createRecord:
                this.router.navigate(['/template/new'], { fragment: OperationType.Payment });
                break;
            case ActionType.editRecord:
                this.router.navigate([`/template/${action.templateID}`], { fragment: OperationType.Payment });
                break;
            // case ActionType.removeRecord:
            //   this.removeTemplateService.removeTemplate({
            //     templateID: action.templateID,
            //   });
            //   break;
            case ActionType.sortList:
                this.fetchPaymentGreyListService.search({
                    sortBy: action.sortDirection,
                    listNames: [],
                    listType: ListTypeEnum.Grey,
                });
                break;
            default:
                console.error('Wrong template action.');
        }
    }

    createTemplate() {
        this.action({ type: ActionType.createRecord });
    }

    fetchMore() {
        this.fetchPaymentGreyListService.fetchMore();
    }

    search(searchValue: string) {
        this.fetchPaymentGreyListService.search({ searchValue, listNames: [], listType: ListTypeEnum.Grey });
    }
}
