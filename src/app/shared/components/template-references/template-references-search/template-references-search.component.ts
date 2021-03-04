import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, map, take } from 'rxjs/operators';

import { removeEmptyProperties } from '../../../utils/remove-empty-properties';

@Component({
    selector: 'fb-template-references-search',
    templateUrl: 'template-references-search.component.html',
})
export class TemplateReferencesSearchComponent {
    @Output() valueChanges: EventEmitter<string> = new EventEmitter();

    form: FormGroup = this.fb.group({
        searchQuery: '',
    });

    constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
        this.form.valueChanges.pipe(debounceTime(600), map(removeEmptyProperties)).subscribe((v) => {
            this.router.navigate([location.pathname], { queryParams: v });
            this.valueChanges.emit(v.searchQuery);
        });
        this.route.queryParams.pipe(take(1)).subscribe((v) => this.form.patchValue(v));
    }
}
