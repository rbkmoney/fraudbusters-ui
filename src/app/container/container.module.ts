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
import { TagModule } from '../shared/components/tag';
import { FilterRolesPipe } from './components/user-info/filter-roles.pipe';
import { FormatRolePipe } from './components/user-info/format-role.pipe';
import { RoleToClassPipe } from './components/user-info/role-to-class.pipe';
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
        TagModule,
    ],
    declarations: [ContainerComponent, UserInfoComponent, FilterRolesPipe, FormatRolePipe, RoleToClassPipe],
    exports: [ContainerComponent],
})
export class ContainerModule {}
