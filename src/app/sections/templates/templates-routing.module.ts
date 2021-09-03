import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { PaymentTemplatesComponent } from './components/payment-templates/payment-templates.component';
import { TemplatesComponent } from './templates.component';
import { PaymentReferencesComponent } from './components/payment-references/payment-references.component';
import { DefaultPaymentReferencesComponent } from './components/payment-dafeult-references/default-payment-references.component';

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
                        path: 'templates',
                        component: PaymentTemplatesComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'references',
                        component: PaymentReferencesComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'default-references',
                        component: DefaultPaymentReferencesComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: '',
                        redirectTo: 'templates',
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class TemplatesRoutingModule {}
