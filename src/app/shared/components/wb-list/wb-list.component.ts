import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';

import { ConfigService } from '../../../core/config.service';
import { ListType } from '../../constants/list-type';
import { OperationType } from '../../constants/operation-type';
import { SortOrder } from '../../constants/sort-order';
import { ErrorHandlerService } from '../../services/utils/error-handler.service';
import { SearchFieldService } from '../../services/utils/search-field.service';
import { RemoveRowListDialogComponent } from './remove-row-list/remove-row-list-dialog.component';
import { WbListService } from './wb-list.service';

@Component({
    selector: 'fb-wb-list',
    templateUrl: './wb-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WbListComponent implements OnInit {
    @Input() listType: ListType;
    @Input() isCounting = false;

    listsRows = [];
    searchValue = '';
    operationType: OperationType;
    operationTypes;
    listNames: string[] = [];
    selectedListNames: string[] = [];

    paymentColumns = ['listName', 'partyId', 'shopId', 'value', 'insertTime'];
    p2pColumns = ['listName', 'partyId', 'shopId', 'value', 'insertTime'];

    private SIZE: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private errorHandlerService: ErrorHandlerService,
        private searchFieldService: SearchFieldService,
        private listService: WbListService,
        private snackBar: MatSnackBar,
        public dialog: MatDialog,
        configService: ConfigService
    ) {
        this.SIZE = configService.config.pageSize;
        this.displayedColumns.next([]);
    }

    isLoadMore = false;
    displayedColumns = new ReplaySubject<string[]>();
    sortType = SortOrder.DESC;

    ngOnInit(): void {
        this.operationTypes = Object.keys(OperationType);
        this.operationType = this.operationTypes[0];
        this.getListNames();
    }

    selectionChange(): void {
        if (this.operationType === OperationType.Payment) {
            this.displayedColumns.next(this.initColumns(this.paymentColumns));
        } else {
            this.displayedColumns.next(this.initColumns(this.p2pColumns));
        }
        this.search();
    }

    private initColumns(columns: string[]): string[] {
        return this.isCounting ? columns.concat(['info', 'edit']) : columns.concat(['edit']);
    }

    getListNames(): void {
        this.listService.getNames((OperationType as any)[this.operationType], this.listType).subscribe(
            (names) => {
                this.listNames = names;
                this.selectedListNames = this.listNames;
                this.selectionChange();
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
                this.listType,
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
        const dialogRef = this.dialog.open(RemoveRowListDialogComponent, {
            width: '350px',
            data: { listRecord: listRecordRow, operationType: this.operationType, listType: this.listType },
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
