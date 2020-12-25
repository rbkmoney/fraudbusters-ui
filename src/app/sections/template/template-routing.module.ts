import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'list',
        loadChildren: () => import('./templates-list').then((m) => m.TemplatesModule),
    },
    {
        path: 'details/:id',
        loadChildren: () => import('./template-details').then((m) => m.TemplateDetailsModule),
    },
    {
        path: 'create',
        loadChildren: () => import('./create-template').then((m) => m.CreateTemplateModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
    exports: [RouterModule],
})
export class TemplateRoutingModule {}
