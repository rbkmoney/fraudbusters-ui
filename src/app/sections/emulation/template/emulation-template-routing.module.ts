import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Roles } from '../../../auth';
import { AuthGuard } from '../../../auth/auth-guard';
import { EmulationTemplateComponent } from './emulation-template.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                redirectTo: 'template',
                pathMatch: 'full',
            },
            {
                path: 'template',
                component: EmulationTemplateComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer, Roles.fraudMonitoring, Roles.fraudSupport] },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class EmulationTemplateRoutingModule {}
