import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, _MatMenuDirectivesModule } from '@angular/material/menu';

import { ListHeaderModule } from '../../../../../shared/components/list-header';
import { SharedPipesModule } from '../../../../../shared/pipes';
import { NotificationHeaderComponent } from './components/notification-header/notification-header.component';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { PeriodicalNotificationsListComponent } from './periodical-notifications-list.component';

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