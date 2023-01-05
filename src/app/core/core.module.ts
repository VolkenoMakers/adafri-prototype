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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { RouterModule } from '@angular/router';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoInternetComponent } from './components/no-internet/no-internet.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { ThemesService } from './services/themes/themes.service';
import { NeedHelpComponent } from './components/need-help/need-help.component';
import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RechargeAccountComponent } from './components/recharge-account/recharge-account.component';
import { AdfInputComponent } from './components/forms/adf-input/adf-input.component';
import { NgbCarouselModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { AdfToastComponent } from './components/adf-toast/adf-toast.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AdfToastComponent,
    AdfInputComponent,
    RechargeAccountComponent,
    DashboardComponent,
    DateRangePickerComponent,
    NeedHelpComponent,
    NoInternetComponent,
    MainNavbarComponent,
    AdfBtnComponent,
    LoadingPageComponent,
    SearchDialog,
  ],
  imports: [
    MatSelectModule,
    ReactiveFormsModule,
    MatOptionModule,
    NgbToastModule,
    NgbCarouselModule,
    CommonModule,
    HttpClientModule,
    MatProgressBarModule,
    MatExpansionModule,
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
    TranslateModule,
    NgxDaterangepickerMd
  ], 
  providers: [
    ThemesService
  ],
  exports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTableModule,
    NgxDaterangepickerMd,
    DateRangePickerComponent,
    NeedHelpComponent,
    MatMenuModule,
    NoInternetComponent,
    LoadingPageComponent,
    HttpClientModule,
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
    Ng2GoogleChartsModule,
    MatTooltipModule,
  ]
})
export class CoreModule { }
