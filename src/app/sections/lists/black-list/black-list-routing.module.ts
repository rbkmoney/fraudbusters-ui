import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlackListComponent } from './black-list.component';
import { AddRowBlackListComponent } from './add-row-black-list/add-row-black-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'lists/black',
                component: BlackListComponent,
            },
            {
                path: 'lists/black/new',
                component: AddRowBlackListComponent,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class BlackListRoutingModule {}
