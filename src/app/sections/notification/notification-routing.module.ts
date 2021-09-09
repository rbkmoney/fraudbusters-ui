import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { NotificationComponent } from './notification.component';
import { EditNotificationComponent } from './components/edit-notification/edit-notification.component';
import { CreateNotificationComponent } from './components/create-notification/create-notification.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: NotificationComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'new',
                        component: CreateNotificationComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: ':id',
                        component: EditNotificationComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class NotificationRoutingModule {}
