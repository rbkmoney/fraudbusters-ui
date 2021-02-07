import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'fb-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
