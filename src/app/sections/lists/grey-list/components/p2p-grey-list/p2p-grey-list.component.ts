import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { WbListRecords } from '../../../../../api/fb-management/swagger-codegen/model/wbListRecords';
import { Action, ActionType } from '../../../../../shared/components/wb-list/action';
import { OperationType } from '../../../../../shared/constants/operation-type';
import { LAYOUT_GAP_S } from '../../../../../tokens';
import { FetchP2pGreyListService } from '../../services/fetch-p2p-grey-list.service';
import { RemoveListRecordService } from '../../services/remove-list-record.service';
import ListTypeEnum = WbListRecords.ListTypeEnum;

@Component({
    templateUrl: 'p2p-grey-list.component.html',
    providers: [FetchP2pGreyListService, RemoveListRecordService],
})
export class P2pGreyListComponent {
    list$ = this.fetchP2pGreyListService.searchResult$;
    hasMore$ = this.fetchP2pGreyListService.hasMore$;
    inProgress$ = this.fetchP2pGreyListService.inProgress$;

    operationType = OperationType;

    constructor(
        private fetchP2pGreyListService: FetchP2pGreyListService,
        private router: Router,
        private removeListRowService: RemoveListRecordService,
        @Inject(LAYOUT_GAP_S) public layoutGapS: string
    ) {
        this.removeListRowService.removed$.subscribe(() => {
            this.fetchP2pGreyListService.search({ listType: 'grey', listNames: [] });
        });
    }

    action(action: Action) {
        switch (action.type) {
            case ActionType.createRecord:
                this.router.navigate(['/lists/grey/new'], { fragment: OperationType.PeerToPeer });
                break;
            case ActionType.editRecord:
                this.router.navigate([`/template/${action.templateID}`], { fragment: OperationType.PeerToPeer });
                break;
            case ActionType.removeRecord:
                this.removeListRowService.removeRecord(action.recordID);
                break;
            case ActionType.sortList:
                this.fetchP2pGreyListService.search({
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
