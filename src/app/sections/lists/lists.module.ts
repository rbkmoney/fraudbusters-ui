import { NgModule } from '@angular/core';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';
import { TemplatesRoutingModule } from '../templates/templates-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConfirmActionDialogModule } from '../../shared/components/confirm-action-dialog';
import { MatMenuModule } from '@angular/material/menu';
import { EmptySearchResultModule } from '../../shared/components/empty-search-result';
import { SharedPipesModule } from '../../shared/pipes';
import { FlexModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PaymentTemplatesModule } from '../../api';
import { PaymentTemplatesListModule } from '../templates/components/payment-templates/payment-templates-list';
import { ShowMorePanelModule } from '../../shared/components/show-more-panel';
import { WhiteListModule } from './components/white-list';
import { GreyListModule } from './components/grey-list';
import { BlackListModule } from './components/black-list';

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
