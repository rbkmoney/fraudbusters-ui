import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { NavigateMenuModule } from '../shared/components/navigate-menu/navigate-menu.module';
import { RolesToStringPipe } from './components/user-info/roles-to-string.pipe';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ContainerComponent } from './container.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatIconModule,
        MatSidenavModule,
        NavigateMenuModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatDividerModule,
    ],
    declarations: [ContainerComponent, UserInfoComponent, RolesToStringPipe],
    exports: [ContainerComponent],
})
export class ContainerModule {}
