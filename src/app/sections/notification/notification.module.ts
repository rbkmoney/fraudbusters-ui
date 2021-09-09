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
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { NotificationComponent } from './notification.component';
import { NotificationService } from './services/notification.service';
import { EditNotificationComponent } from './components/edit-notification/edit-notification.component';
import { NotificationRoutingModule } from './notification-routing.module';
import { CreateNotificationModule } from '../../shared/components/create-notification/create-notification.module';
import { NotificationsService } from '../../api/payments/notifications';
import { CreateNotificationComponent } from './components/create-notification/create-notification.component';

@NgModule({
    declarations: [NotificationComponent, EditNotificationComponent, CreateNotificationComponent],
    imports: [
        MatSnackBarModule,
        NotificationRoutingModule,
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
        CreateNotificationModule,
    ],
    providers: [NotificationsService, NotificationService, ErrorHandlerService],
})
export class NotificationModule {}
