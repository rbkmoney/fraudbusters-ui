import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigateMenuComponent } from './navigate-menu.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [NavigateMenuComponent, MenuListItemComponent],
    exports: [NavigateMenuComponent],
    imports: [CommonModule, MatButtonModule, MatIconModule, FlexLayoutModule, MatToolbarModule, MatListModule],
    providers: [],
})
export class NavigateMenuModule {}
