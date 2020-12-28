import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'black-list',
                loadChildren: () => import('./black-list').then((m) => m.BlackListModule),
            },
            {
                path: 'grey-list',
                loadChildren: () => import('./grey-list').then((m) => m.GreyListModule),
            },
            {
                path: 'white-list',
                loadChildren: () => import('./white-list').then((m) => m.WhiteListModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
    exports: [RouterModule],
})
export class ListsRoutingModule {}
