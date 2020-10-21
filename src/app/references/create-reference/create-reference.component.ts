import { Component, OnInit } from '@angular/core';
import { ReferencesService } from '../references.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { OperationType } from '../../shared/constants/operation-type';
import { HttpErrorResponse } from '@angular/common/http';
import { P2pReference, PaymentReference } from '../model/reference';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { OperationTypeComponent } from '../../shared/model/OperationTypeComponent';

@Component({
    selector: 'app-create-reference',
    templateUrl: './create-reference.component.html',
    styleUrls: ['./create-reference.component.scss'],
})
export class CreateReferenceComponent extends OperationTypeComponent implements OnInit {
    reference: PaymentReference | P2pReference;

    constructor(
        private route: ActivatedRoute,
        private referenceService: ReferencesService,
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
            this.reference =
                this.operationType === OperationType.Payment
                    ? new PaymentReference('', '', '')
                    : new P2pReference('', '');
        });
    }

    save(): void {
        console.log(this.reference);
        this.referenceService.saveReference(this.operationType, this.reference).subscribe(
            (id) => {
                console.log(id);
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }
}