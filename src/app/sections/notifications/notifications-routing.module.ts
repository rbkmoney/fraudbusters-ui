import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { NotificationsComponent } from './notifications.component';
import { PaymentTemplatesComponent } from '../templates/components/payment-templates/payment-templates.component';
import { PaymentReferencesComponent } from '../templates/components/payment-references/payment-references.component';
import { DefaultPaymentReferencesComponent } from '../templates/components/payment-dafeult-references/default-payment-references.component';
import { PeriodicalNotificationComponent } from './components/periodical/periodical-notification.component';
import { ChannelsComponent } from './components/channels/channels.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: NotificationsComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'periodical',
                        component: PeriodicalNotificationComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'channels',
                        component: ChannelsComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: '',
                        redirectTo: 'periodical',
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class NotificationsRoutingModule {}
