import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'fb-template-header',
    templateUrl: 'template-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateHeaderComponent {}
