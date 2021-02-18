import { Component } from '@angular/core';

import { WbListRecords } from '../../../../../api/fb-management/swagger-codegen/model/wbListRecords';
import { FetchPaymentGreyListService } from '../../services/fetch-payment-grey-list.service';
import ListTypeEnum = WbListRecords.ListTypeEnum;

@Component({
    templateUrl: 'payment-grey-list.component.html',
    providers: [FetchPaymentGreyListService],
})
export class PaymentGreyListComponent {
    constructor(private fetchPaymentGreyListService: FetchPaymentGreyListService) {
        this.fetchPaymentGreyListService.searchResult$.subscribe((q) => console.log(q));
        this.fetchPaymentGreyListService.search({ listNames: [], listType: ListTypeEnum.Grey });
    }
}
