import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ProfileService } from './services/profile/profile.service';

@Component({
    selector: 'fb-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ProfileService],
})
export class ContainerComponent {
    constructor(private profileService: ProfileService) {}

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
