import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { P2pTemplatesComponent } from './components/p2p-templates/p2p-templates.component';
import { PaymentTemplatesComponent } from './components/payment-templates/payment-templates.component';
import { TemplatesComponent } from './templates.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: TemplatesComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'p2p',
                        component: P2pTemplatesComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'payments',
                        component: PaymentTemplatesComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: '',
                        redirectTo: 'payments',
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class TemplatesRoutingModule {}
