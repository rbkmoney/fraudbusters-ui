import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { TemplatesModule } from './templates/templates.module';
import { ReferencesModule } from './references/references.module';
import { GroupsModule } from './groups/groups.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { GroupsReferenceModule } from './groups-reference/groups-reference.module';
import { WbListModule } from './wb-list/wb-list.module';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [AppComponent, MenuListItemComponent],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        CoreModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatSliderModule,
        AppRoutingModule,
        TemplatesModule,
        ReferencesModule,
        GroupsModule,
        GroupsReferenceModule,
        WbListModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
