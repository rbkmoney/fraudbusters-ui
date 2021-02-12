import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterRoles',
})
export class FilterRolesPipe implements PipeTransform {
    transform(roles: string[]): string[] {
        return roles.filter((role) => role.includes('fraud'));
    }
}
