import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'emulation/template',
        pathMatch: 'full',
    },
    {
        path: 'templates',
        loadChildren: () => import('./templates').then((m) => m.TemplatesModule),
    },
    {
        path: 'template',
        loadChildren: () => import('./template').then((m) => m.TemplateModule),
    },
    {
        path: 'references',
        loadChildren: () => import('./references').then((m) => m.ReferencesModule),
    },
    {
        path: 'default-references',
        loadChildren: () => import('./default-references').then((m) => m.DefaultReferencesModule),
    },
    {
        path: 'default-reference',
        loadChildren: () => import('./default-reference').then((m) => m.DefaultReferenceModule),
    },
    {
        path: 'reference',
        loadChildren: () => import('./reference').then((m) => m.ReferenceModule),
    },
    {
        path: 'groups',
        loadChildren: () => import('./groups').then((m) => m.GroupsModule),
    },
    {
        path: 'group',
        loadChildren: () => import('./group').then((m) => m.GroupModule),
    },
    {
        path: 'create-group-reference',
        loadChildren: () => import('./create-group-reference').then((m) => m.CreateGroupReferenceModule),
    },
    {
        path: 'lists',
        loadChildren: () => import('./lists').then((m) => m.ListsModule),
    },
    {
        path: 'list',
        loadChildren: () => import('./list').then((m) => m.ListModule),
    },
    {
        path: 'load',
        loadChildren: () => import('./load').then((m) => m.LoadModule),
    },
    {
        path: 'emulation',
        loadChildren: () => import('./testing/components/emulation').then((m) => m.EmulationModule),
    },
    {
        path: 'testing',
        loadChildren: () => import('./testing').then((m) => m.TestingModule),
    },
    {
        path: 'data-sets',
        loadChildren: () => import('./data-set').then((m) => m.DataSetModule),
    },
    {
        path: 'audit',
        loadChildren: () => import('./audit').then((m) => m.AuditModule),
    },
    {
        path: 'historical-data',
        loadChildren: () => import('./historical-data').then((m) => m.HistoricalDataModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
    exports: [RouterModule],
})
export class SectionsRoutingModule {}
