import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GroupsComponent } from './groups.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'groups',
                component: GroupsComponent,
            },
            {
                path: 'groups/new',
                component: CreateGroupComponent,
            },
            {
                path: 'groups/:id',
                component: EditGroupComponent,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class GroupsRoutingModule {}
