import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatRole',
})
export class FormatRolePipe implements PipeTransform {
    transform(role: string): string {
        switch (role) {
            case 'fraud-officer':
                return 'Officer';
            case 'fraud-monitoring':
                return 'Monitoring';
            case 'fraud-auditor':
                return 'Auditor';
            case 'fraud-support':
                return 'Support';
            default:
                return role;
        }
    }
}
