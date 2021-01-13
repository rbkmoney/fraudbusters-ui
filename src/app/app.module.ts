import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppComponent } from './app.component';
import { ConfigModule, ConfigService } from './config';
import { initializer } from './initializer';
import { SectionsModule } from './sections/sections.module';
import { NavigateMenuModule } from './shared/components/navigate-menu/navigate-menu.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ConfigModule,
        BrowserAnimationsModule,
        HttpClientModule,
        KeycloakAngularModule,
        NavigateMenuModule,
        SectionsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        RouterModule,
        MatButtonModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializer,
            multi: true,
            deps: [ConfigService, KeycloakService],
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
