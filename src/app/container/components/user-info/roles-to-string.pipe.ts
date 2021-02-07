import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'rolesToString',
})
export class RolesToStringPipe implements PipeTransform {
    transform(roles: string[]): string {
        return roles.join(', ');
    }
}
