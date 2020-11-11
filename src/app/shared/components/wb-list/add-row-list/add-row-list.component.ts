import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from '../../../services/utils/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OperationType } from '../../../constants/operation-type';
import { HttpErrorResponse } from '@angular/common/http';
import { P2pListRecord } from '../../../services/lists/model/p2p-list-record';
import { PaymentListRecord } from '../../../services/lists/model/payment-list-record';
import { OperationTypeComponent } from '../../operation-type-component';
import { ListType } from '../../../constants/list-type';
import { WbListService } from '../wb-list.service';
import { Location } from '@angular/common';
import { CountInfoListRecord } from '../../../services/lists/model/count-info-list-record';
import { CountInfo } from '../../../services/lists/model/count-info';

@Component({
    selector: 'app-add-row-list',
    templateUrl: './add-row-list.component.html',
    styleUrls: ['./add-row-list.component.scss'],
})
export class AddRowListComponent extends OperationTypeComponent implements OnInit {
    p2pRecords: CountInfoListRecord[] = [];
    paymentRecords: CountInfoListRecord[] = [];

    @Input() listType: ListType;
    @Input() isCounting = false;

    constructor(
        private router: Router,
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
