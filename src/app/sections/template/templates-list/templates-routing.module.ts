import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from './templates.component';
import { AuthGuard } from '../../../auth/auth-guard';

const routes: Routes = [
    {
        path: '',
        component: TemplatesComponent,
        canActivate: [AuthGuard],
        data: { roles: ['fraud-officer'] },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TemplatesRoutingModule {}
