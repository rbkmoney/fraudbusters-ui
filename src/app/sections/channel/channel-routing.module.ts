import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { ChannelComponent } from './channel.component';
import { CreateChannelComponent } from './components/create-channel/create-channel.component';
import { EditChannelComponent } from './components/edit-channel/edit-channel.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ChannelComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'new',
                        component: CreateChannelComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: ':id',
                        component: EditChannelComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class ChannelRoutingModule {}
