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
import { PaymentTemplatesListModule } from '../templates/components/payment-templates/payment-templates-list';
import { TemplatesRoutingModule } from '../templates/templates-routing.module';
import { BlackListModule } from './components/black-list';
import { GreyListModule } from './components/grey-list';
import { WhiteListModule } from './components/white-list';
import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';

@NgModule({
    declarations: [ListsComponent],
    imports: [
        ListsRoutingModule,
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
        WhiteListModule,
        BlackListModule,
        GreyListModule,
    ],
})
export class ListsModule {}
