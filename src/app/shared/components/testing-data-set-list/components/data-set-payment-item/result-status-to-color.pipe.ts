import { Pipe, PipeTransform } from '@angular/core';
import { ThemePaletteEnum } from '../../../../../styles/utils/theme-palette-enum';

@Pipe({
    name: 'resultStatusToColor',
})
export class ResultStatusToColorPipe implements PipeTransform {
    transform(role: string): ThemePaletteEnum {
        switch (role) {
            case 'accept':
                return ThemePaletteEnum.Success;
            case 'notify':
                return ThemePaletteEnum.Pending;
            case 'normal':
                return ThemePaletteEnum.Blue;
            case 'decline':
                return ThemePaletteEnum.Warn;
            default:
                return ThemePaletteEnum.Primary;
        }
    }
}
