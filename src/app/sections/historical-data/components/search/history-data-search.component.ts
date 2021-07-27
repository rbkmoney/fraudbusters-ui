import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, map, take } from 'rxjs/operators';

import { removeEmptyProperties } from '../../../../shared/utils/remove-empty-properties';
import { SearchFieldService } from '../../../../shared/services/utils/search-field.service';

@Component({
    selector: 'fb-history-data-search',
    templateUrl: 'history-data-search.component.html',
    styleUrls: ['search.component.scss'],
})
export class HistoryDataSearchComponent {
    @Output() valueChanges: EventEmitter<string> = new EventEmitter();

    form: FormGroup = this.fb.group({
        partyId: '',
        shopId: '',
        cardToken: '',
        country: '',
        status: '',
        id: '',
        fingerprint: '',
        email: '',
        from: this.searchFieldService.todayFromTime().toISOString(),
        to: new Date().toISOString(),
    });

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private searchFieldService: SearchFieldService
    ) {
        this.form.valueChanges.pipe(debounceTime(600), map(removeEmptyProperties)).subscribe((v) => {
            this.router.navigate([location.pathname], { queryParams: v });
            this.valueChanges.emit(v);
        });
        this.route.queryParams.pipe(take(1)).subscribe((v) => this.form.patchValue(v));
    }
}
