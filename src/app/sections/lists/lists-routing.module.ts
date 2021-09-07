import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from '../templates/templates.component';
import { AuthGuard, Roles } from '../../auth';
import { PaymentTemplatesComponent } from '../templates/components/payment-templates/payment-templates.component';
import { PaymentReferencesComponent } from '../templates/components/payment-references/payment-references.component';
import { DefaultPaymentReferencesComponent } from '../templates/components/payment-dafeult-references/default-payment-references.component';
import { ListsComponent } from './lists.component';
import { WhiteListComponent } from './components/white-list/white-list.component';
import { GreyListComponent } from './components/grey-list/grey-list.component';
import { BlackListComponent } from './components/black-list/black-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'emulation/template',
        pathMatch: 'full',
    },
    {
        path: 'black',
        loadChildren: () => import('./components/black-list').then((m) => m.BlackListModule),
    },
    {
        path: 'grey',
        loadChildren: () => import('./components/grey-list').then((m) => m.GreyListModule),
    },
    {
        path: 'white',
        loadChildren: () => import('./components/white-list').then((m) => m.WhiteListModule),
    },
];

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ListsComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'white-list',
                        component: WhiteListComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'black-list',
                        component: BlackListComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'grey-list',
                        component: GreyListComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: '',
                        redirectTo: 'black-list',
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class ListsRoutingModule {}
