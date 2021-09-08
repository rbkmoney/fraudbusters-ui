import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { ListHeaderModule } from '../../../../../shared/components/list-header';
import { SharedPipesModule } from '../../../../../shared/pipes';
import { PeriodicalNotificationsListComponent } from './periodical-notifications-list.component';
import { NotificationHeaderComponent } from './components/notification-header/notification-header.component';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { _MatMenuDirectivesModule, MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        CommonModule,
        FlexModule,
        MatCardModule,
        MatExpansionModule,
        MatDividerModule,
        _MatMenuDirectivesModule,
        MatIconModule,
        MatMenuModule,
        SharedPipesModule,
        MatButtonModule,
        ListHeaderModule,
    ],
    declarations: [PeriodicalNotificationsListComponent, NotificationHeaderComponent, NotificationItemComponent],
    exports: [PeriodicalNotificationsListComponent],
})
export class PeriodicalNotificationsListModule {}
