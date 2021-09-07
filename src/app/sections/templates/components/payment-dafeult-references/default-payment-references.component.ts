import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { PaymentReference } from '../../../../api/fb-management/swagger-codegen/model/paymentReference';
import { OperationType } from '../../../../shared/constants/operation-type';
import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchDefaultReferencesService } from '../../services/fetch-default-references.service';
import { RemoveDefaultReferenceService } from '../../services/remove-default-reference.service';

@Component({
    templateUrl: 'default-payment-references.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchDefaultReferencesService, RemoveDefaultReferenceService],
})
export class DefaultPaymentReferencesComponent {
    references$ = this.fetchDefaultReferencesService.searchResult$;
    inProgress$ = this.fetchDefaultReferencesService.inProgress$;
    hasMore$ = this.fetchDefaultReferencesService.hasMore$;

    constructor(
        private router: Router,
        private fetchDefaultReferencesService: FetchDefaultReferencesService,
        private removeDefaultReferenceService: RemoveDefaultReferenceService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.removeDefaultReferenceService.removed$.subscribe(() => {
            this.fetchDefaultReferencesService.search({ isGlobal: false, isDefault: false });
        });
    }

    createReference() {
        this.router.navigate(['/default-references/new/payment']);
    }

    search(searchValue: string) {
        this.fetchDefaultReferencesService.search({
            searchValue,
            isGlobal: false,
            isDefault: false,
        });
    }

    fetchMore(sortFieldValue: string) {
        this.fetchDefaultReferencesService.fetchMore({
            sortFieldValue,
            isGlobal: false,
            isDefault: false,
        });
    }

    goToTemplate(id: string) {
        this.router.navigate([`/template/${id}`], { fragment: OperationType.Payment });
    }

    removeReference(reference: PaymentReference) {
        this.removeDefaultReferenceService.removeReference({
            reference,
        });
    }
}
