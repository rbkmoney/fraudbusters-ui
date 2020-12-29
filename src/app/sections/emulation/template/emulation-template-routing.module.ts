import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../../../auth/auth-guard';
import { EmulationTemplateComponent } from './emulation-template.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'emulation/template',
                component: EmulationTemplateComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer', 'fraud-monitoring', 'fraud-support'] },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class EmulationTemplateRoutingModule {}
