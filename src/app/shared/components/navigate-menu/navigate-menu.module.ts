import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { NavigateMenuComponent } from './navigate-menu.component';

@NgModule({
    declarations: [NavigateMenuComponent, MenuListItemComponent],
    exports: [NavigateMenuComponent],
    imports: [CommonModule, MatButtonModule, MatIconModule, FlexLayoutModule, MatToolbarModule, MatListModule],
    providers: [],
})
export class NavigateMenuModule {}
