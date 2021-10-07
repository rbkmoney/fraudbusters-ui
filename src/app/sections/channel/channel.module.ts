import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PaymentTemplatesModule } from '../../api';
import { NotificationsService } from '../../api/payments/notifications';
import { CreateChannelModule } from '../../shared/components/create-channel/create-channel.module';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { ChannelRoutingModule } from './channel-routing.module';
import { ChannelComponent } from './channel.component';
import { CreateChannelComponent } from './components/create-channel/create-channel.component';
import { EditChannelComponent } from './components/edit-channel/edit-channel.component';
import { ChannelService } from './services/channel.service';

@NgModule({
    declarations: [ChannelComponent, EditChannelComponent, CreateChannelComponent],
    imports: [
        MatSnackBarModule,
        ChannelRoutingModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        PaymentTemplatesModule,
        FlexModule,
        MatIconModule,
        CommonModule,
        CreateChannelModule,
    ],
    providers: [NotificationsService, ChannelService, ErrorHandlerService],
})
export class ChannelModule {}
