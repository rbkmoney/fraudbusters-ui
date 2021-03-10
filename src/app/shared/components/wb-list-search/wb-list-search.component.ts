import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, take } from 'rxjs/operators';

import { OperationType } from '../../constants/operation-type';
import { removeEmptyProperties } from '../../utils/remove-empty-properties';
import { FetchWbListNamesService } from './services/fetch-wb-list-names.service';

@Component({
    selector: 'fb-wb-list-search',
    templateUrl: 'wb-list-search.component.html',
    providers: [FetchWbListNamesService],
})
export class WbListSearchComponent {
    @Input() type: OperationType;

    @Output() valueChanges: EventEmitter<{ searchQuery: string; listName: string }> = new EventEmitter();

    names$ = this.fetchWbListNamesService.names$;

    form: FormGroup = this.fb.group({
        searchQuery: '',
        listName: '',
    });

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private fetchWbListNamesService: FetchWbListNamesService
    ) {
        this.form.valueChanges.pipe(debounceTime(600), map(removeEmptyProperties)).subscribe((v) => {
            this.router.navigate([location.pathname], { queryParams: v });
            this.valueChanges.emit(v);
        });
        this.form.valueChanges
            .pipe(
                debounceTime(300),
                distinctUntilChanged((p, q) => p.listName === q.listName)
            )
            .subscribe((v) => {
                this.fetchWbListNamesService.getNames(this.type, v.listName);
            });
        this.route.queryParams.pipe(take(1)).subscribe((v) => this.form.patchValue(v));
    }
}
