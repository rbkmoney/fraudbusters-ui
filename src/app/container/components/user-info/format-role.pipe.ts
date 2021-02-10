import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatRole',
})
export class FormatRolePipe implements PipeTransform {
    transform(role: string): string {
        switch (role) {
            case 'manage-account':
                return 'Manage account';
            case 'manage-account-links':
                return 'Manage account links';
            case 'view-profile':
                return 'View profile';
            case 'offline_access':
                return 'Offline access';
            case 'uma_authorization':
                return 'UMA authorization';
            default:
                return role;
        }
    }
}
