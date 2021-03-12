import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ListType } from '../../../constants/list-type';
import { OperationType } from '../../../constants/operation-type';
import { CountInfo } from '../../../services/lists/model/count-info';
import { CountInfoListRecord } from '../../../services/lists/model/count-info-list-record';
import { P2pListRecord } from '../../../services/lists/model/p2p-list-record';
import { PaymentListRecord } from '../../../services/lists/model/payment-list-record';
import { ErrorHandlerService } from '../../../services/utils/error-handler.service';
import { OperationTypeComponent } from '../../operation-type-component';
import { WbListService } from '../wb-list.service';

@Component({
    selector: 'fb-add-row-list',
    templateUrl: './add-row-list.component.html',
    styleUrls: ['./add-row-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddRowListComponent extends OperationTypeComponent implements OnInit {
    p2pRecords: CountInfoListRecord[] = [];
    paymentRecords: CountInfoListRecord[] = [];

    @Input() listType: ListType;
    @Input() isCounting = false;

    filteredOptions: Observable<string[]>;

    constructor(
        private route: ActivatedRoute,
        private listService: WbListService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar,
        private location: Location
    ) {
        super();
    }

    ngOnInit(): void {
        this.getOperationTypeFromFragment();
        this.filteredOptions = this.listService.getAvailableListNames(this.operationType);
    }

    getOperationTypeFromFragment(): void {
        this.route.fragment.subscribe((fragment: string) => {
            this.operationType = OperationType[fragment];
            this.addNewReference();
        });
    }

    addNewReference(): void {
        this.isPaymentReference()
            ? (this.paymentRecords = this.paymentRecords.concat([
                  new CountInfoListRecord(
                      new PaymentListRecord(null, '', '', null, null, '', ''),
                      this.isCounting ? new CountInfo(0, '', '') : null
                  ),
              ]))
            : (this.p2pRecords = this.p2pRecords.concat([
                  new CountInfoListRecord(
                      new P2pListRecord(null, '', '', null, null, ''),
                      this.isCounting ? new CountInfo(0, '', '') : null
                  ),
              ]));
    }

    loadListFromCsv(filesToUpload: Array<any>): void {
        this.listService.saveListRowsFromFile(this.operationType, this.listType, filesToUpload[0]).subscribe(
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
        this.isPaymentReference() ? this.paymentRecords.splice(i, 1) : this.p2pRecords.splice(i, 1);
    }

    save(): void {
        this.listService
            .saveListRow(
                this.operationType,
                this.listType,
                this.isPaymentReference() ? this.paymentRecords : this.p2pRecords
            )
            .subscribe(
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
