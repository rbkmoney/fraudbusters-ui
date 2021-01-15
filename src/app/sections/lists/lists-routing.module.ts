import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'emulation/template',
        pathMatch: 'full',
    },
    {
        path: 'black',
        loadChildren: () => import('./black-list').then((m) => m.BlackListModule),
    },
    {
        path: 'grey',
        loadChildren: () => import('./grey-list').then((m) => m.GreyListModule),
    },
    {
        path: 'white',
        loadChildren: () => import('./white-list').then((m) => m.WhiteListModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ListsRoutingModule {}
