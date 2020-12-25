import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { ENV, environment } from '../environments';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { initializer } from './initializer';
import { BlackListModule } from './sections/lists/black-list/black-list.module';
import { GreyListModule } from './sections/lists/grey-list/grey-list.module';
import { WhiteListModule } from './sections/lists/white-list/white-list.module';
import { FraudUploaderListModule } from './sections/load/fraud-uploader/fraud-uploader.module';
import { SectionsModule } from './sections/sections.module';
import { NavigateMenuModule } from './shared/components/navigate-menu/navigate-menu.module';

@NgModule({
    declarations: [AppComponent],
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
        FraudUploaderListModule,
        BlackListModule,
        GreyListModule,
        WhiteListModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        HttpClientModule,
        KeycloakAngularModule,
        NavigateMenuModule,
        SectionsModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializer,
            multi: true,
            deps: [KeycloakService],
        },
        { provide: ENV, useValue: environment },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
