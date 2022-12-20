import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainNavbarComponent, SearchDialog } from './components/main-navbar/main-navbar.component';
import { AdfBtnComponent } from './components/adf-btn/adf-btn.component';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoInternetComponent } from './components/no-internet/no-internet.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(httpClient:HttpClient){
   return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json')
}
@NgModule({
  declarations: [
    NoInternetComponent,
    MainNavbarComponent,
    AdfBtnComponent,
    DashboardComponent,
    TransactionsComponent,
    LoadingPageComponent,
    SearchDialog,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule,
    Ng2GoogleChartsModule,
    MatTooltipModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    NgxDaterangepickerMd.forRoot()
  ], 
  exports: [
    NoInternetComponent,
    LoadingPageComponent,
    HttpClientModule,
    DashboardComponent,
    TransactionsComponent,
    TranslateModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MainNavbarComponent,
    MatFormFieldModule,
    AdfBtnComponent,
  ]
})
export class CoreModule { }
