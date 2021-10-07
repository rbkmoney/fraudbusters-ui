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
import { ChannelsListComponent } from './channels-list.component';
import { ChannelHeaderComponent } from './components/channel-header/channel-header.component';
import { ChannelItemComponent } from './components/channel-item/channel-item.component';

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
    declarations: [ChannelsListComponent, ChannelItemComponent, ChannelHeaderComponent],
    exports: [ChannelsListComponent],
})
export class ChannelsListModule {}
