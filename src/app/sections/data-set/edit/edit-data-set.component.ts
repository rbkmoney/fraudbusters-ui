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
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        @Inject(LAYOUT_GAP_L) public layoutGapL: string,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    back() {
        this.router.navigate([`../testing/data-sets`]);
    }
}
