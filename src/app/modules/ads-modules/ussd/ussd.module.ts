import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UssdRoutingModule } from './ussd-routing.module';
import { UssdComponent } from './ussd.component';


@NgModule({
  declarations: [
    UssdComponent
  ],
  imports: [
    CommonModule,
    UssdRoutingModule
  ]
})
export class UssdModule { }
