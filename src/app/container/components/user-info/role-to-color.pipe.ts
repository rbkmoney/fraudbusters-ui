import { Pipe, PipeTransform } from '@angular/core';

import { ThemePaletteEnum } from '../../../styles/utils/theme-palette-enum';

@Pipe({
    name: 'roleToColor',
})
export class RoleToColorPipe implements PipeTransform {
    transform(role: string): ThemePaletteEnum {
        switch (role) {
            case 'fraud-monitoring':
                return ThemePaletteEnum.Success;
            case 'fraud-auditor':
                return ThemePaletteEnum.Warn;
            case 'fraud-support':
                return ThemePaletteEnum.Blue;
            case 'fraud-officer':
            default:
                return ThemePaletteEnum.Primary;
        }
    }
}
