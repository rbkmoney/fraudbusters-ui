import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmulationTemplateComponent } from './emulation-template.component';
import { AuthGuard } from '../../../auth/auth-guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'template',
    },
    {
        path: 'template',
        component: EmulationTemplateComponent,
        canActivate: [AuthGuard],
        data: { roles: ['fraud-officer', 'fraud-monitoring', 'fraud-support'] },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmulationTemplateRoutingModule {}
