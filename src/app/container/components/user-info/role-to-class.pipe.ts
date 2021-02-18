import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'roleToClass',
})
export class RoleToClassPipe implements PipeTransform {
    transform(role: string): string {
        return `fb-role-color-${role}`;
    }
}
