import { Component, OnInit } from '@angular/core';
import { OperationType } from '../../../shared/constants/operation-type';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfigService } from '../../../core/config.service';
import { ReplaySubject } from 'rxjs';
import { SortOrder } from '../../../shared/constants/sort-order';
import { HttpErrorResponse } from '@angular/common/http';
import { WhiteListService } from './white-list.service';
import { ListType } from '../../../shared/constants/list-type';
import { Sort } from '@angular/material/sort';
import { RemoveRowWhiteListDialogComponent } from './remove-row-white-list/remove-row-white-list-dialog.component';
import { SearchFieldService } from '../../../shared/services/utils/search-field.service';

@Component({
    selector: 'app-wb-list',
    templateUrl: './white-list.component.html',
    styleUrls: ['./white-list.component.scss'],
})
export class WhiteListComponent implements OnInit {
    listsRows = [];
    searchValue = '';
    operationType: OperationType;
    operationTypes;
    listNames: string[] = ['IP', 'CARD_TOKEN'];
    selectedListNames: string[] = [];

    private LIST_TYPE = ListType.white;
    private SIZE: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private errorHandlerService: ErrorHandlerService,
        private searchFieldService: SearchFieldService,
        private listService: WhiteListService,
        private snackBar: MatSnackBar,
        public dialog: MatDialog,
        configService: ConfigService
    ) {
        this.SIZE = configService.config.pageSize;
        this.displayedColumns.next(['groupId', 'edit']);
    }

    isLoadMore = false;
    displayedColumns = new ReplaySubject<string[]>();
    sortType = SortOrder.DESC;

    ngOnInit(): void {
        this.operationTypes = Object.keys(OperationType);
        this.operationType = this.operationTypes[0];
        this.getListNames();
        this.selectedListNames = this.listNames;
        this.selectionChange();
    }

    selectionChange(): void {
        if (this.operationType === OperationType.Payment) {
            this.displayedColumns.next(['listName', 'partyId', 'shopId', 'value', 'insertTime', 'edit']);
        } else {
            this.displayedColumns.next(['listName', 'identityId', 'value', 'insertTime', 'edit']);
        }
        this.search();
    }

    getListNames(): void {
        this.listService.getNames((OperationType as any)[this.operationType], this.LIST_TYPE).subscribe(
            (names) => {
                this.listNames = names;
            },
            (error: HttpErrorResponse) => {
                this.errorHandlerService.handleError(error, this.snackBar);
            }
        );
    }

    search(): void {
        this.searchWithSort(null, this.sortType, null);
    }

    private searchWithSort(lastInListName, sortOrder: SortOrder, sortFieldValue): void {
        this.listService
            .findLists(
                this.selectedListNames,
                this.LIST_TYPE,
                (OperationType as any)[this.operationType],
                this.SIZE,
                this.searchFieldService.formatField(this.searchValue),
                lastInListName,
                sortOrder,
                sortFieldValue
            )
            .subscribe(
                (response) => {
                    if (!!!lastInListName) {
                        this.listsRows = response.wbListRecords;
                    } else {
                        this.listsRows = this.listsRows.concat(response.wbListRecords);
                    }
                    this.isLoadMore = this.listsRows.length < response.count;
                },
                (error: HttpErrorResponse) => {
                    this.errorHandlerService.handleError(error, this.snackBar);
                }
            );
    }

    navigateToNew(): void {
        this.router.navigate(['./new'], { relativeTo: this.route, fragment: this.operationType });
    }

    changeSearch(newValue): void {
        this.searchValue = newValue;
        this.search();
    }

    sortData(sort: Sort): void {
        this.sortType = sort.direction === 'asc' ? SortOrder.ASC : SortOrder.DESC;
        this.search();
    }

    openDialog(listRecordRow): void {
        const dialogRef = this.dialog.open(RemoveRowWhiteListDialogComponent, {
            width: '350px',
            data: { listRecord: listRecordRow, operationType: this.operationType, listType: this.LIST_TYPE },
        });

        dialogRef.afterClosed().subscribe((result) => {
            this.search();
        });
    }

    loadMore(): void {
        this.searchWithSort(
            this.listsRows[this.listsRows.length - 1].id,
            this.sortType,
            this.listsRows[this.listsRows.length - 1].insertTime
        );
    }
}
