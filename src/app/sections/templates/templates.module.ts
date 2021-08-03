import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PaymentTemplatesModule } from '../../api';
import { ConfirmActionDialogModule } from '../../shared/components/confirm-action-dialog';
import { EmptySearchResultModule } from '../../shared/components/empty-search-result';
import { ShowMorePanelModule } from '../../shared/components/show-more-panel';
import { SharedPipesModule } from '../../shared/pipes';
import { PaymentTemplatesComponent } from './components/payment-templates/payment-templates.component';
import { TemplatesSearchComponent } from './components/templates-search/templates-search.component';
import { PaymentTemplatesListModule } from './payment-templates-list';
import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';

@NgModule({
    imports: [
        TemplatesRoutingModule,
        MatTabsModule,
        CommonModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        ConfirmActionDialogModule,
        MatMenuModule,
        EmptySearchResultModule,
        SharedPipesModule,
        FlexModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        PaymentTemplatesModule,
        PaymentTemplatesListModule,
        ShowMorePanelModule,
    ],
    declarations: [TemplatesComponent, PaymentTemplatesComponent, TemplatesSearchComponent],
    // TODO: need to refactor these services
    providers: [],
})
export class TemplatesModule {}
