import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';

import { ConfigService } from '../../config';
import { OperationTypeComponent } from '../../shared/components/operation-type-component';
import { OperationType } from '../../shared/constants/operation-type';
import { SortOrder } from '../../shared/constants/sort-order';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';
import { P2pReference } from './model/p2p-reference';
import { PaymentReference } from './model/payment-reference';
import { ReferencesService } from './references.service';
import { RemoveReferenceDialogComponent } from './remove-reference-dialog/remove-reference-dialog.component';

@Component({
    templateUrl: './references.component.html',
    styleUrls: ['./references.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferencesComponent extends OperationTypeComponent implements OnInit {
    private SIZE = this.configService.pageSize;
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
    lastRefSubject$ = this.referenceService.lastRefSubject$;
    lastRef: PaymentReference | P2pReference;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private referenceService: ReferencesService,
        private dialog: MatDialog,
        private searchFieldService: SearchFieldService,
        private configService: ConfigService
    ) {
        super();
        this.displayedColumns.next(['templateId', 'edit']);
        this.lastRefSubject$.subscribe((value) => {
            this.lastRef = value;
        });
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
            lastInListName: this.lastRef.id,
            sortOrder: this.sortType,
            isGlobalValue: this.searchType === this.GLOBAL,
            isDefaultValue: this.searchType === this.DEFAULT,
            sortField: this.lastRef.templateId,
            loadMore: true,
        });
    }

    navigateToNew(): void {
        this.router.navigate(['/references/new'], { fragment: this.operationType });
    }
}
