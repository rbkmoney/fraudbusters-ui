import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesComponent } from './templates.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { AuthGuard } from '../../auth/auth-guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'templates',
                component: TemplatesComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer'] },
            },
            {
                path: 'templates/new',
                component: CreateTemplateComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer'] },
            },
            {
                path: 'templates/:id',
                component: EditTemplateComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer'] },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class TemplatesRoutingModule {}
