import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, pluck, shareReplay, switchMap, withLatestFrom } from 'rxjs/operators';

import { TemplatesService } from '../services/templates/templates.service';

@Component({
    templateUrl: './edit-template.component.html',
    styleUrls: ['./edit-template.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTemplateComponent {
    operationType$ = this.route.fragment;
    template$ = this.route.params.pipe(
        pluck('id'),
        withLatestFrom(this.operationType$),
        switchMap(([id, type]) => {
            return this.templateService.getTemplates(type as any, 1, id);
        }),
        pluck('result'),
        map((res) => res[0]),
        shareReplay(1)
    );

    constructor(private route: ActivatedRoute, private router: Router, private templateService: TemplatesService) {}

    back() {
        this.router.navigate([`../templates`]);
    }
}
