import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { SharedPipesModule } from '../../../shared/pipes';
import { ActionsComponent } from './components/actions/actions.component';
import { TemplateHeaderComponent } from './components/template-header/template-header.component';
import { TemplateItemComponent } from './components/template-item/template-item.component';
import { PaymentTemplatesListComponent } from './payment-templates-list.component';

@NgModule({
    imports: [
        CommonModule,
        FlexModule,
        MatExpansionModule,
        MatCardModule,
        MatDividerModule,
        SharedPipesModule,
        MatButtonModule,
    ],
    declarations: [PaymentTemplatesListComponent, TemplateHeaderComponent, TemplateItemComponent, ActionsComponent],
    exports: [PaymentTemplatesListComponent],
})
export class PaymentTemplatesListModule {}
