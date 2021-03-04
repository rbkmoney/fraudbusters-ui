import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_S } from '../tokens';
import { ProfileService } from './services/profile/profile.service';

@Component({
    selector: 'fb-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ProfileService],
})
export class ContainerComponent {
    constructor(private profileService: ProfileService, @Inject(LAYOUT_GAP_S) public layoutGapS: string) {}

    getUsername(): string {
        return this.profileService.getUsername();
    }

    getUserRoles(): string[] {
        return this.profileService.getUserRoles();
    }

    logout() {
        this.profileService.logout();
    }
}
