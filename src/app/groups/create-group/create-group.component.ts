import { Component, OnInit } from '@angular/core';
import { PriorityIdModel } from '../model/priority-id-model';
import { OperationType } from '../../shared/constants/operation-type';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GroupsService } from '../groups.service';
import { Group } from '../model/group';
import { TemplatesService } from '../../templates/templates.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-create-group',
    templateUrl: './create-group.component.html',
    styleUrls: ['./create-group.component.scss'],
})
export class CreateGroupComponent implements OnInit {
    newGroup: Group = new Group('', []);
    displayedColumns: string[] = ['id', 'priority', 'edit'];
    operationType: OperationType;
    options: string[] = [];

    constructor(
        private route: ActivatedRoute,
        private groupsService: GroupsService,
        private templatesService: TemplatesService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.preloadData();
        this.templatesService.getTemplatesName(this.operationType).subscribe(
            (names) => {
                this.options = names;
            },
            (error: HttpErrorResponse) => {
                this.snackBar.open(`${error.status}: ${error.message}`, 'OK', {
                    duration: 1500,
                });
            }
        );
    }

    private preloadData(): void {
        this.route.fragment.subscribe((fragment: string) => {
            this.operationType = OperationType[fragment];
        });
    }

    save(): void {
        this.groupsService.saveGroup(this.operationType, this.newGroup).subscribe(
            (id) => {
                console.log(id);
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    navigateReference(): void {}

    addTemplate(): void {
        this.newGroup.priorityTemplates = this.newGroup.priorityTemplates.concat([new PriorityIdModel('', 0)]);
    }

    removeTemplate(removeId: string): void {
        this.newGroup.priorityTemplates = this.newGroup.priorityTemplates.filter((obj) => obj.id !== removeId);
    }

    doFilter(value): void {
        this.templatesService.getTemplatesName(this.operationType, value).subscribe(
            (names) => {
                this.options = names;
            },
            (error: HttpErrorResponse) => {
                this.snackBar.open(`${error.status}: ${error.message}`, 'OK', {
                    duration: 1500,
                });
            }
        );
    }
}
