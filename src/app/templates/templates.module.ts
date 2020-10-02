import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplatesRoutingModule} from './templates-routing.module';
import {TemplatesComponent} from './templates.component';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {TemplatesService} from './templates.service';
import {ConfigService} from '../core/config.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    TemplatesComponent
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
  ],
  providers: [TemplatesService, ConfigService]
})
export class TemplatesModule {
}
