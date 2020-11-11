import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GreyListComponent } from './grey-list.component';
import { AddRowGreyListComponent } from './add-row-grey-list/add-row-grey-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'lists/grey',
                component: GreyListComponent,
            },
            {
                path: 'lists/grey/new',
                component: AddRowGreyListComponent,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class GreyListRoutingModule {}
