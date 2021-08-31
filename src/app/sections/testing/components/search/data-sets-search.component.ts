import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, map, take } from 'rxjs/operators';

import { SearchFieldService } from '../../../../shared/services/utils/search-field.service';
import { removeEmptyProperties } from '../../../../shared/utils/remove-empty-properties';

@Component({
    selector: 'fb-data-sets-search',
    templateUrl: 'data-sets-search.component.html',
    styleUrls: ['search.component.scss'],
})
export class DataSetsSearchComponent {
    @Output() valueChanges: EventEmitter<string> = new EventEmitter();

    form: FormGroup = this.fb.group({
        searchValue: '',
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
            const params = Object.create(v);
            params.from = new Date(v.from).toISOString();
            params.to = new Date(v.to).toISOString();
            params.searchValue = v.searchValue;
            this.router.navigate([location.pathname], { queryParams: params });
            this.valueChanges.emit(v);
        });
        this.route.queryParams.pipe(take(1)).subscribe((v) => this.form.patchValue(v));
    }
}
