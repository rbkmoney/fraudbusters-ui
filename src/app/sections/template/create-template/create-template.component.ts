import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './create-template.component.html',
    styleUrls: ['./create-template.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTemplateComponent {
    operationType$ = this.route.fragment;

    constructor(private router: Router, private route: ActivatedRoute) {}

    back() {
        this.router.navigate([`../templates`]);
    }
}
