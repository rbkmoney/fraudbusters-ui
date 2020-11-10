import { Component, OnInit } from '@angular/core';
import { ReferencesService } from '../references.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationType } from '../../../shared/constants/operation-type';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { OperationTypeComponent } from '../../../shared/components/operation-type-component';
import { PaymentReference } from '../model/payment-reference';
import { P2pReference } from '../model/p2p-reference';
import { TemplatesService } from '../../templates/templates.service';

@Component({
    selector: 'app-create-reference',
    templateUrl: './create-reference.component.html',
    styleUrls: ['./create-reference.component.scss'],
})
export class CreateReferenceComponent extends OperationTypeComponent implements OnInit {
    options: string[] = [];

    p2pReferences: P2pReference[] = [];
    paymentReferences: PaymentReference[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private templatesService: TemplatesService,
        private referenceService: ReferencesService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar
    ) {
        super();
    }

    ngOnInit(): void {
        this.getOperationTypeFromFragment();
        this.doFilter('');
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
                  { templateId: '', partyId: '', shopId: '', isDefault: false, isGlobal: false },
              ]))
            : (this.p2pReferences = this.p2pReferences.concat([
                  { templateId: '', identityId: '', isDefault: false, isGlobal: false },
              ]));
    }

    save(): void {
        this.referenceService
            .saveReferences(this.operationType, this.isPaymentReference() ? this.paymentReferences : this.p2pReferences)
            .subscribe(
                (ids) => {
                    this.navigateToList();
                    this.snackBar.open(`Saved succeeded: ${ids}`, 'OK', {
                        duration: 1500,
                    });
                },
                (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
            );
    }

    navigateToList(): void {
        this.router.navigate(['../references'], { fragment: this.operationType });
    }

    deleteRef(i): void {
        this.isPaymentReference() ? this.paymentReferences.splice(i, 1) : this.p2pReferences.splice(i, 1);
    }

    doFilter(value): void {
        this.templatesService.getTemplatesName(this.operationType, value).subscribe(
            (names) => {
                this.options = names;
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    setGlobal(i): void {
        this.isPaymentReference()
            ? (this.paymentReferences[i].isGlobal = !this.paymentReferences[i].isGlobal)
            : (this.p2pReferences[i].isGlobal = !this.p2pReferences[i].isGlobal);
    }

    setDefault(i): void {
        this.isPaymentReference()
            ? (this.paymentReferences[i].isDefault = !this.paymentReferences[i].isDefault)
            : (this.p2pReferences[i].isDefault = !this.p2pReferences[i].isDefault);
    }
}
