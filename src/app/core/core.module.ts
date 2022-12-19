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
import { NoInternetComponent } from './components/no-internet/no-internet.component';

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
    FormsModule,
    RouterModule,
    Ng2GoogleChartsModule,
    MatTooltipModule,
    NgxDaterangepickerMd.forRoot()
  ], 
  exports: [
    NoInternetComponent,
    LoadingPageComponent,
    DashboardComponent,
    TransactionsComponent,
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
    AdfBtnComponent,
  ]
})
export class CoreModule { }
