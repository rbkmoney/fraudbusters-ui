import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GroupsReferenceComponent } from './groups-reference.component';
import { CreateGroupsReferenceComponent } from './create-groups-reference/create-groups-reference.component';
import { EditGroupsReferenceComponent } from './edit-groups-reference/edit-groups-reference.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'groups-reference',
                component: GroupsReferenceComponent,
            },
            {
                path: 'groups-reference/new',
                component: CreateGroupsReferenceComponent,
            },
            {
                path: 'groups-reference/:id',
                component: EditGroupsReferenceComponent,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class GroupsReferenceRoutingModule {}
