import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'audit',
        loadChildren: () => import('./audit').then((m) => m.AuditModule),
    },
    {
        path: 'emulation',
        loadChildren: () => import('./emulation').then((m) => m.EmulationModule),
    },
    {
        path: 'groups',
        loadChildren: () => import('./groups').then((m) => m.GroupsModule),
    },
    {
        path: 'groups-reference',
        loadChildren: () => import('./groups-reference').then((m) => m.GroupsReferenceModule),
    },

    {
        path: 'lists',
        loadChildren: () => import('./lists').then((m) => m.ListsModule),
    },
    {
        path: 'load',
        loadChildren: () => import('./load').then((m) => m.LoadModule),
    },
    {
        path: 'references',
        loadChildren: () => import('./references').then((m) => m.ReferencesModule),
    },
    {
        path: 'templates',
        loadChildren: () => import('./templates').then((m) => m.TemplatesModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
    exports: [RouterModule],
})
export class SectionsRoutingModule {}
