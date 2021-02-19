import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';

import { TemplateHeaderComponent } from './components/template-header/template-header.component';
import { PaymentTemplatesListComponent } from './payment-templates-list.component';

@NgModule({
    imports: [CommonModule, FlexModule],
    declarations: [PaymentTemplatesListComponent, TemplateHeaderComponent],
})
export class PaymentTemplatesListModule {}
