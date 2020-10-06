import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    redirectTo: '/templates',
                    pathMatch: 'full',
                },
            ],
            { paramsInheritanceStrategy: 'always' }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
