import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineAll, map, pluck, shareReplay, switchMap, withLatestFrom } from 'rxjs/operators';

import { LAYOUT_GAP_L, LAYOUT_GAP_M } from '../../../tokens';
import { DataSetService } from '../../../api/payments/data-set';

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
