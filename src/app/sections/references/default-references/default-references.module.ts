import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { EmptySearchResultModule } from '../../../shared/components/empty-search-result';
import { ReferencesModule } from '../../../shared/components/references';
import { DefaultP2pReferencesComponent } from './components/default-p2p-references/default-p2p-references.component';
import { DefaultPaymentReferencesComponent } from './components/default-payment-references/default-payment-references.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { DefaultReferencesRoutingModule } from './default-references-routing.module';
import { DefaultReferencesComponent } from './default-references.component';

@NgModule({
    declarations: [
        DefaultReferencesComponent,
        DefaultP2pReferencesComponent,
        DefaultPaymentReferencesComponent,
        NavigationMenuComponent,
    ],
    imports: [
        DefaultReferencesRoutingModule,
        FlexModule,
        ReferencesModule,
        MatButtonModule,
        MatCardModule,
        CommonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        EmptySearchResultModule,
        MatSelectModule,
        ReactiveFormsModule,
    ],
})
export class DefaultReferencesModule {}
