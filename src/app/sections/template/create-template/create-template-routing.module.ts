import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTemplateComponent } from './create-template.component';
import { AuthGuard } from '../../../auth/auth-guard';

const routes: Routes = [
    {
        path: '',
        component: CreateTemplateComponent,
        canActivate: [AuthGuard],
        data: { roles: ['fraud-officer'] },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreateTemplateRoutingModule {}
