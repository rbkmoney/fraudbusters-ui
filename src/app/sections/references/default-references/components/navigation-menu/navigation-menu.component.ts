import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
    templateUrl: 'navigation-menu.component.html',
    selector: 'fb-navigation-menu',
})
export class NavigationMenuComponent {
    linkControl = new FormControl('');

    links = [
        {
            path: 'payments',
            name: 'Payments',
        },
        {
            path: 'p2p',
            name: 'Peer to Peer',
        },
    ];

    constructor(private router: Router, private route: ActivatedRoute) {
        this.linkControl.valueChanges.subscribe((v) => {
            this.router.navigate([`references/default/${v}`]);
        });

        this.route.url.pipe(first()).subscribe((url) => {
            this.linkControl.setValue(url[0].path);
        });
    }
}
