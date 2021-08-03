import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';

import { PaymentGroupsService } from '../../../api/payments/groups';
import { OperationType } from '../../../shared/constants/operation-type';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { TemplatesService } from '../../template/services/templates/templates.service';
import { Group } from '../model/group';
import { GroupUtilsService } from '../utils/group-utils.service';

@Component({
    templateUrl: './edit-group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditGroupComponent implements OnInit {
    editGroupId: string;
    editGroup: Group = { groupId: '', priorityTemplates: [] };
    displayedColumns: string[] = ['id', 'priority', 'edit'];
    operationType: OperationType;
    options: string[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private groupsService: PaymentGroupsService,
        private errorHandlerService: ErrorHandlerService,
        private templatesService: TemplatesService,
        private groupUtilsService: GroupUtilsService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.preloadData();
        this.groupsService.getGroupById(this.editGroupId).subscribe(
            (group) => {
                this.editGroup = group;
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    private preloadData(): void {
        this.route.fragment.subscribe((fragment: string) => {
            this.operationType = OperationType[fragment];
        });
        this.route.params.subscribe(({ id }) => {
            this.editGroupId = id;
        });
    }

    save(): void {
        this.groupsService.save(this.editGroup).subscribe(
            (id) => {
                this.snackBar.open(`Saved success: ${id}`, 'OK', {
                    duration: 1500,
                });
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    navigateReference(): void {
        this.router.navigate([`../groups-reference`], { queryParams: { searchValue: this.editGroup.groupId } });
    }

    addTemplate(): void {
        this.editGroup.priorityTemplates = this.editGroup.priorityTemplates.concat([{ id: '', priority: 0 }]);
    }

    removeTemplate(removeId: string): void {
        this.editGroup.priorityTemplates = this.editGroup.priorityTemplates.filter((obj) => obj.id !== removeId);
    }

    doFilter(value): void {
        this.templatesService.getTemplatesName(value).subscribe(
            (names) => {
                this.options = names;
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    sortData(sort: Sort, group: Group): void {
        this.groupUtilsService.sortData(sort, group);
    }
}
