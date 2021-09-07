import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { PaymentReference } from '../../../../api/fb-management/swagger-codegen/model/paymentReference';
import { OperationType } from '../../../../shared/constants/operation-type';
import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchReferencesService } from '../../services/fetch-references.service';
import { RemoveReferenceService } from '../../services/remove-reference.service';

@Component({
    templateUrl: 'payment-references.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchReferencesService, RemoveReferenceService],
})
export class PaymentReferencesComponent {
    references$ = this.fetchReferencesService.searchResult$;
    inProgress$ = this.fetchReferencesService.inProgress$;
    hasMore$ = this.fetchReferencesService.hasMore$;

    constructor(
        private router: Router,
        private fetchReferencesService: FetchReferencesService,
        private removeReferenceService: RemoveReferenceService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.removeReferenceService.removed$.subscribe(() => {
            this.fetchReferencesService.search({ isGlobal: false, isDefault: false });
        });
    }

    createReference() {
        this.router.navigate(['/reference/new/payment']);
    }

    search(searchValue: string) {
        this.fetchReferencesService.search({
            searchValue,
            isGlobal: false,
            isDefault: false,
        });
    }

    fetchMore(sortFieldValue: string) {
        this.fetchReferencesService.fetchMore({
            sortFieldValue,
            isGlobal: false,
            isDefault: false,
        });
    }

    goToTemplate(id: string) {
        this.router.navigate([`/template/${id}`]);
    }

    removeReference(reference: PaymentReference) {
        this.removeReferenceService.removeReference({
            type: OperationType.Payment,
            reference,
        });
    }
}
