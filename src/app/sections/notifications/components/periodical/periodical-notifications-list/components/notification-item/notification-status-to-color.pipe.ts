import { Pipe, PipeTransform } from '@angular/core';

import { ThemePaletteEnum } from '../../../../../../../styles/utils/theme-palette-enum';

@Pipe({
    name: 'notificationStatusToColor',
})
export class NotificationStatusToColorPipe implements PipeTransform {
    transform(role: string): ThemePaletteEnum {
        switch (role) {
            case 'ACTIVE':
                return ThemePaletteEnum.Success;
            case 'ARCHIVE':
                return ThemePaletteEnum.Pending;
            case 'CREATED':
                return ThemePaletteEnum.Blue;
            default:
                return ThemePaletteEnum.Primary;
        }
    }
}
