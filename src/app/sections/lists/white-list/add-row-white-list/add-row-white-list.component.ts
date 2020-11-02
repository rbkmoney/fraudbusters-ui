import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsReferenceService } from '../../../../groups-reference/groups-reference.service';
import { ErrorHandlerService } from '../../../../shared/services/utils/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OperationType } from '../../../../shared/constants/operation-type';
import { HttpErrorResponse } from '@angular/common/http';
import { P2pListRecord } from '../../../../shared/services/lists/model/p2p-list-record';
import { PaymentListRecord } from '../../../../shared/services/lists/model/payment-list-record';
import { OperationTypeComponent } from '../../../../shared/model/operation-type-component';
import { WhiteListService } from '../white-list.service';
import { ListType } from '../../../../shared/constants/list-type';

@Component({
    selector: 'app-add-row-white-list',
    templateUrl: './add-row-white-list.component.html',
    styleUrls: ['./add-row-white-list.component.scss'],
})
export class AddRowWhiteListComponent extends OperationTypeComponent implements OnInit {
    p2pRecords: P2pListRecord[] = [];
    paymentRecords: PaymentListRecord[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private listService: WhiteListService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar
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
                  new PaymentListRecord(null, '', '', null, null, '', ''),
              ]))
            : (this.p2pRecords = this.p2pRecords.concat([new P2pListRecord(null, '', '', null, null, '')]));
    }

    deleteRef(i): void {
        this.isPaymentReference() ? this.paymentRecords.splice(i, 1) : this.p2pRecords.splice(i, 1);
    }

    save(): void {
        this.listService
            .saveListRow(
                this.operationType,
                ListType.white,
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
        this.router.navigate(['../groups-reference'], { fragment: this.operationType });
    }
}
