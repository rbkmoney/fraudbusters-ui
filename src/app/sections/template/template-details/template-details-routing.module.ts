import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../auth/auth-guard';
import { TemplateDetailsComponent } from './template-details.component';

const routes: Routes = [
    {
        path: '',
        component: TemplateDetailsComponent,
        canActivate: [AuthGuard],
        data: { roles: ['fraud-officer'] },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TemplateDetailsRoutingModule {}
