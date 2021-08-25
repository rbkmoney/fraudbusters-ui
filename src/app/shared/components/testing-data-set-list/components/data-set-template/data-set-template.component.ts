import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { CheckedDataSet } from '../../../../../api/fb-management/swagger-codegen/model/checkedDataSet';
import { LAYOUT_GAP_L, LAYOUT_GAP_M } from '../../../../../tokens';
import { checkValidateResponse } from '../../../../services/utils/check-validation-response';
import { ErrorHandlerService } from '../../../../services/utils/error-handler.service';
import { TestingDataSetService } from '../../services/data-set/testing-data-set.service';

@Component({
    selector: 'fb-data-set-template',
    templateUrl: './data-set-template.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TestingDataSetService],
})
export class DataSetTemplateComponent implements OnInit {
    @Input() dataSet: CheckedDataSet;

    form = this.testingDataSetService.form;

    @Output()
    valueChanges: EventEmitter<string> = new EventEmitter();

    tested$ = this.testingDataSetService.tested$;

    validated$ = this.testingDataSetService.validated$;
    inProgress$ = this.testingDataSetService.inProgress$;

    constructor(
        private router: Router,
        private testingDataSetService: TestingDataSetService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar,
        @Inject(LAYOUT_GAP_L) public layoutGapL: string,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    ngOnInit() {
        if (this.dataSet) {
            this.form.setValue({ template: this.dataSet.template });
        }
        this.tested$.subscribe(
            (checkedSetId) => {
                this.valueChanges.emit(checkedSetId);
                if (this.dataSet) {
                    this.snackBar.open(`Saved success: ${this.dataSet.id}`, 'OK', {
                        duration: 3000,
                    });
                } else {
                    this.snackBar.open(`Template has been created`, 'OK', {
                        duration: 3000,
                    });
                    this.navigateToEdit(this.dataSet.id);
                }
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
        this.validated$.subscribe(
            (response) => {
                this.snackBar.open(checkValidateResponse(response), 'OK', {
                    duration: 3000,
                });
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    testTemplate() {
        this.testingDataSetService.testTemplate(this.form.get('template').value, this.dataSet);
    }

    validateTemplate() {
        this.testingDataSetService.validateTemplate(this.form.get('template').value);
    }

    navigateToEdit(id) {
        this.router.navigate([`../template/${id}`]);
    }

    back() {
        this.router.navigate([`../templates`]);
    }
}
