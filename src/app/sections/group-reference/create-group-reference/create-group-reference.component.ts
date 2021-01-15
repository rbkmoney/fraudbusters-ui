import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { OperationTypeComponent } from '../../../shared/components/operation-type-component';
import { OperationType } from '../../../shared/constants/operation-type';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { GroupsReferenceService } from '../groups-reference.service';
import { P2pGroupReferenceModel } from '../model/p2p-groups-reference';
import { PaymentGroupReferenceModel } from '../model/payment-groups-reference';

@Component({
    templateUrl: './create-group-reference.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateGroupReferenceComponent extends OperationTypeComponent implements OnInit {
    p2pReferences: P2pGroupReferenceModel[] = [];
    paymentReferences: PaymentGroupReferenceModel[] = [];

    constructor(
        private router: Router,
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
        this.isPaymentReference()
            ? (this.paymentReferences = this.paymentReferences.concat([
                  { id: null, groupId: '', partyId: '', shopId: '' },
              ]))
            : (this.p2pReferences = this.p2pReferences.concat([{ id: null, groupId: '', identityId: '' }]));
    }

    deleteRef(i): void {
        this.isPaymentReference() ? this.paymentReferences.splice(i, 1) : this.p2pReferences.splice(i, 1);
    }

    save(): void {
        this.referenceService
            .saveGroupsReference(
                this.operationType,
                this.isPaymentReference() ? this.paymentReferences : this.p2pReferences
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
