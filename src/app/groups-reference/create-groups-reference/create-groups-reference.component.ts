import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OperationType } from '../../shared/constants/operation-type';
import { HttpErrorResponse } from '@angular/common/http';
import { PaymentGroupReferenceModel } from '../model/payment-groups-reference';
import { P2pGroupReferenceModel } from '../model/p2p-groups-reference';
import { OperationTypeComponent } from '../../shared/model/OperationTypeComponent';
import { GroupsReferenceService } from '../groups-reference.service';
import { GroupReferenceModel } from '../model/groups-reference';

@Component({
    selector: 'app-create-groups-reference',
    templateUrl: './create-groups-reference.component.html',
    styleUrls: ['./create-groups-reference.component.scss'],
})
export class CreateGroupsReferenceComponent extends OperationTypeComponent implements OnInit {
    p2pReferences: P2pGroupReferenceModel[] = [];
    paymentReferences: PaymentGroupReferenceModel[] = [];

    constructor(
        private route: ActivatedRoute,
        private referenceService: GroupsReferenceService,
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
        this.operationType === OperationType.Payment
            ? (this.paymentReferences = this.paymentReferences.concat([new PaymentGroupReferenceModel('', '', '')]))
            : (this.p2pReferences = this.p2pReferences.concat([new P2pGroupReferenceModel('', '')]));
    }

    save(): void {
        this.referenceService
            .saveGroupsReference(
                this.operationType,
                OperationType.Payment ? this.paymentReferences : this.p2pReferences
            )
            .subscribe(
                (id) => {
                    this.snackBar.open(`Saved succeeded: ${id}`, 'OK', {
                        duration: 1500,
                    });
                },
                (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
            );
    }
}
