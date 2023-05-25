import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { CoreModule } from "./core/core.module";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localeFr, 'fr');

export function createTranslateLoader(httpClient:HttpClient){
    return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json')
}
 
@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [ { provide: LOCALE_ID, useValue: "fr-FR" }],
    bootstrap: [AppComponent],
    imports: [
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: (createTranslateLoader),
              deps: [HttpClient]
            }
          }),
        NgxDaterangepickerMd.forRoot(),
        BrowserModule,
        CoreModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        NgbModule,
    ]
})
export class AppModule { }
