import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, shareReplay, switchMap } from 'rxjs/operators';

import { DataSetService } from '../../../api/payments/data-set';
import { LAYOUT_GAP_L, LAYOUT_GAP_M } from '../../../tokens';

@Component({
    templateUrl: './edit-data-set.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDataSetComponent {
    dataSet$ = this.route.params.pipe(
        pluck('id'),
        switchMap(([id]) => {
            return this.dataSetService.getById(id);
        }),
        shareReplay(1)
    );

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataSetService: DataSetService,
        @Inject(LAYOUT_GAP_L) public layoutGapL: string,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    back() {
        this.router.navigate([`../testing/data-sets`]);
    }
}
