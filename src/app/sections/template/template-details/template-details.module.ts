import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TemplateDetailsComponent } from './template-details.component';

@NgModule({
    declarations: [TemplateDetailsComponent],
    imports: [MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule],
})
export class TemplateDetailsModule {}
