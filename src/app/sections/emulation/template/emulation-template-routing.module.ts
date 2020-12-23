import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmulationTemplateComponent } from './emulation-template.component';
import { AuthGuard } from '../../../auth/auth-guard';

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
