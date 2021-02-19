import { Component } from '@angular/core';

import { WbListRecords } from '../../../../../api/fb-management/swagger-codegen/model/wbListRecords';
import { FetchP2pGreyListService } from '../../services/fetch-p2p-grey-list.service';
import ListTypeEnum = WbListRecords.ListTypeEnum;

@Component({
    templateUrl: 'p2p-grey-list.component.html',
    providers: [FetchP2pGreyListService],
})
export class P2pGreyListComponent {
    constructor(private fetchP2pGreyListService: FetchP2pGreyListService) {
        this.fetchP2pGreyListService.searchResult$.subscribe((q) => console.log(q));
        this.fetchP2pGreyListService.search({ listNames: [], listType: ListTypeEnum.Grey });
    }
}
