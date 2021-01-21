import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';

import { OperationType } from '../../../shared/constants/operation-type';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { TemplatesService } from '../../templates-old/templates.service';
import { GroupsService } from '../groups.service';
import { Group } from '../model/group';
import { GroupUtilsService } from '../utils/group-utils.service';

@Component({
    templateUrl: './create-group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateGroupComponent implements OnInit {
    newGroup: Group = { groupId: '', priorityTemplates: [] };
    displayedColumns: string[] = ['id', 'priority', 'edit'];
    operationType: OperationType;
    options: string[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private groupsService: GroupsService,
        private templatesService: TemplatesService,
        private errorHandlerService: ErrorHandlerService,
        private groupUtilsService: GroupUtilsService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.preloadData();
    }

    private preloadData(): void {
        this.route.fragment.subscribe((fragment: string) => {
            this.operationType = OperationType[fragment];
            this.templatesService.getTemplatesName(this.operationType, '').subscribe(
                (names) => {
                    this.options = names;
                },
                (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
            );
            this.addTemplate();
        });
    }

    save(): void {
        this.groupsService.saveGroup(this.operationType, this.newGroup).subscribe(
            (id) => {
                this.navigateToEdit(id);
                this.snackBar.open(`Saved success: ${id}`, 'OK', {
                    duration: 1500,
                });
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    addTemplate(): void {
        this.newGroup.priorityTemplates = this.newGroup.priorityTemplates.concat([{ id: '', priority: 0 }]);
    }

    removeTemplate(removeId: string): void {
        this.newGroup.priorityTemplates = this.newGroup.priorityTemplates.filter((obj) => obj.id !== removeId);
    }

    navigateToEdit(id): void {
        this.router.navigate([`../groups/${id}`], { fragment: this.operationType.toString() });
    }

    sortData(sort: Sort, group: Group): void {
        this.groupUtilsService.sortData(sort, group);
    }
}
