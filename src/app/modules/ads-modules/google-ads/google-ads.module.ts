import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleAdsRoutingModule } from './google-ads-routing.module';
import { GoogleAdsComponent } from './google-ads.component';


@NgModule({
  declarations: [
    GoogleAdsComponent
  ],
  imports: [
    CommonModule,
    GoogleAdsRoutingModule
  ]
})
export class GoogleAdsModule { }
