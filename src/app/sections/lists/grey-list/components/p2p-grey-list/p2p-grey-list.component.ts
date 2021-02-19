import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WbListRecords } from '../../../../../api/fb-management/swagger-codegen/model/wbListRecords';
import { Action, ActionType } from '../../../../../shared/components/wb-table/action';
import { OperationType } from '../../../../../shared/constants/operation-type';
import { FetchP2pGreyListService } from '../../services/fetch-p2p-grey-list.service';
import ListTypeEnum = WbListRecords.ListTypeEnum;

@Component({
    templateUrl: 'p2p-grey-list.component.html',
    providers: [FetchP2pGreyListService],
})
export class P2pGreyListComponent {
    list$ = this.fetchP2pGreyListService.searchResult$;
    hasMore$ = this.fetchP2pGreyListService.hasMore$;
    inProgress$ = this.fetchP2pGreyListService.inProgress$;

    operationType = OperationType;

    constructor(private fetchP2pGreyListService: FetchP2pGreyListService, private router: Router) {}

    action(action: Action) {
        switch (action.type) {
            case ActionType.createRecord:
                this.router.navigate(['/lists/grey/new'], { fragment: OperationType.PeerToPeer });
                break;
            case ActionType.editRecord:
                this.router.navigate([`/template/${action.templateID}`], { fragment: OperationType.PeerToPeer });
                break;
            // case ActionType.removeRecord:
            //   this.removeTemplateService.removeTemplate({
            //     templateID: action.templateID,
            //   });
            //   break;
            case ActionType.sortList:
                this.fetchP2pGreyListService.search({
                    sortBy: action.sortDirection,
                    listNames: [],
                    listType: ListTypeEnum.Grey,
                });
                break;
            default:
                console.error('Wrong template action.');
        }
    }

    createRecord() {
        this.action({ type: ActionType.createRecord });
    }

    fetchMore() {
        this.fetchP2pGreyListService.fetchMore();
    }

    search($event) {
        this.fetchP2pGreyListService.search({
            searchValue: $event.searchQuery,
            listNames: [$event.listName],
            listType: ListTypeEnum.Grey,
        });
    }
}
