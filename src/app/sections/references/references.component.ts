import { Component, OnInit } from '@angular/core';
import { OperationType } from '../../shared/constants/operation-type';
import { ReferencesService } from './references.service';
import { MatDialog } from '@angular/material/dialog';
import { RemoveReferenceDialogComponent } from './remove-reference-dialog/remove-reference-dialog.component';
import { SortOrder } from '../../shared/constants/sort-order';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../../core/config.service';
import { ReplaySubject } from 'rxjs';
import { OperationTypeComponent } from '../../shared/components/operation-type-component';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';

@Component({
    selector: 'app-references',
    templateUrl: './references.component.html',
    styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent extends OperationTypeComponent implements OnInit {
    private SIZE: number;
    DEFAULT = 'default';
    GLOBAL = 'global';

    references = [];
    displayedColumns = new ReplaySubject<string[]>();
    operationTypes = [];
    searchReferenceName;
    sortType = SortOrder.DESC;
    searchType = 'all';

    references$ = this.referenceService.references$;
    isLoadMore$ = this.referenceService.isLoadMore$;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private referenceService: ReferencesService,
        public dialog: MatDialog,
        public searchFieldService: SearchFieldService,
        configService: ConfigService
    ) {
        super();
        this.SIZE = configService.config.pageSize;
        this.displayedColumns.next(['templateId', 'edit']);
    }

    ngOnInit(): void {
        this.operationTypes = Object.keys(OperationType);
        this.operationType = this.operationTypes[0];
        this.operationTypeParseFragment(this.route);
        this.selectionChange();
    }

    openDialog(removeReference): void {
        const dialogRef = this.dialog.open(RemoveReferenceDialogComponent, {
            width: '350px',
            data: { reference: removeReference, operationType: this.operationType },
        });

        dialogRef.afterClosed().subscribe((result) => {
            this.search();
        });
    }

    selectionChange(): void {
        if (this.operationType === OperationType.Payment) {
            this.displayedColumns.next(['templateId', 'partyId', 'shopId', 'lastUpdateDate', 'edit']);
        } else {
            this.displayedColumns.next(['templateId', 'identityId', 'lastUpdateDate', 'edit']);
        }
        this.search();
    }

    search(): void {
        this.referenceService.nextReferences({
            type: (OperationType as any)[this.operationType],
            size: this.SIZE,
            search: this.searchFieldService.formatField(this.searchReferenceName),
            sortOrder: this.sortType,
            isGlobalValue: this.searchType === this.GLOBAL,
            isDefaultValue: this.searchType === this.DEFAULT,
        });
    }

    changeSearch(newValue): void {
        this.searchReferenceName = newValue;
        this.search();
    }

    sortData(sort: Sort): void {
        this.sortType = sort.direction === 'asc' ? SortOrder.ASC : SortOrder.DESC;
        this.search();
    }

    loadMore(): void {
        this.referenceService.nextReferences({
            type: (OperationType as any)[this.operationType],
            size: this.SIZE,
            search: this.searchFieldService.formatField(this.searchReferenceName),
            lastInListName: this.references$[this.referenceService.length - 1].id,
            sortOrder: this.sortType,
            isGlobalValue: this.searchType === this.GLOBAL,
            isDefaultValue: this.searchType === this.DEFAULT,
            sortField: this.references$[this.referenceService.length - 1].templateId,
        });
    }

    navigateToNew(): void {
        this.router.navigate(['/references/new'], { fragment: this.operationType });
    }
}
