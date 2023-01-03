import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookAdsRoutingModule } from './facebook-ads-routing.module';
import { FacebookAdsComponent } from './facebook-ads.component';


@NgModule({
  declarations: [
    FacebookAdsComponent
  ],
  imports: [
    CommonModule,
    FacebookAdsRoutingModule
  ]
})
export class FacebookAdsModule { }
