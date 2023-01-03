import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkedinAdsRoutingModule } from './linkedin-ads-routing.module';
import { LinkedinAdsComponent } from './linkedin-ads.component';


@NgModule({
  declarations: [
    LinkedinAdsComponent
  ],
  imports: [
    CommonModule,
    LinkedinAdsRoutingModule
  ]
})
export class LinkedinAdsModule { }
