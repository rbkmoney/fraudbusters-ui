import { Pipe, PipeTransform } from '@angular/core';

import { RoleTagColorEnum } from './role-tag-color-enum';

@Pipe({
    name: 'roleToColor',
})
export class RoleToColorPipe implements PipeTransform {
    transform(role: string): string {
        switch (role) {
            case 'fraud-officer':
                return RoleTagColorEnum.Officer;
            case 'fraud-monitoring':
                return RoleTagColorEnum.Monitoring;
            case 'fraud-auditor':
                return RoleTagColorEnum.Auditor;
            case 'fraud-support':
                return RoleTagColorEnum.Support;
            default:
                return '';
        }
    }
}
