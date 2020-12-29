import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'fb-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
    @Input() progress = 0;
    @Input() status = '';
}
