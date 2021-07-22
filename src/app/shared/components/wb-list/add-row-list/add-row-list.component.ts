import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ListType } from '../../../constants/list-type';
import { ErrorHandlerService } from '../../../services/utils/error-handler.service';
import { PaymentListsService } from '../../../../api/payments/lists/payment-lists.service';
import { PaymentCountInfo } from '../../../../api/fb-management/swagger-codegen/model/paymentCountInfo';
import { PaymentListRecord } from '../../../../api/fb-management/swagger-codegen/model/paymentListRecord';
import { CountInfo } from '../../../../api/fb-management/swagger-codegen/model/countInfo';

@Component({
    selector: 'fb-add-row-list',
    templateUrl: './add-row-list.component.html',
    styleUrls: ['./add-row-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddRowListComponent implements OnInit {
    paymentRecords: PaymentCountInfo[] = [];

    @Input() listType: ListType;
    @Input() isCounting = false;

    filteredOptions: Observable<string[]>;

    constructor(
        private route: ActivatedRoute,
        private listService: PaymentListsService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.addNewReference();
        this.filteredOptions = this.listService.getAvailableListNames();
    }

    addNewReference(): void {
        const countInfo: CountInfo = { count: 0 };
        const record: PaymentListRecord = {};
        const paymentCountInfo: PaymentCountInfo = {
            countInfo: this.isCounting ? countInfo : null,
            listRecord: record,
        };
        this.paymentRecords = this.paymentRecords.concat([paymentCountInfo]);
    }

    loadListFromCsv(filesToUpload: Array<any>): void {
        this.listService.saveListsRowsFromFile(this.listType, filesToUpload[0]).subscribe(
            () => {
                this.navigateToList();
                this.snackBar.open(`Saved succeeded`, 'OK', {
                    duration: 1500,
                });
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    deleteRef(i): void {
        this.paymentRecords.splice(i, 1);
    }

    save(): void {
        this.listService.saveListsRows(this.listType, this.paymentRecords).subscribe(
            (id) => {
                this.navigateToList();
                this.snackBar.open(`Saved succeeded: ${id}`, 'OK', {
                    duration: 1500,
                });
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    navigateToList(): void {
        this.location.back();
    }
}
