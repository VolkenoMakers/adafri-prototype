import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UssdRoutingModule } from './ussd-routing.module';
import { CreateUssdComponent } from './components/create-ussd/create-ussd.component';


@NgModule({
  declarations: [
    CreateUssdComponent
  ],
  imports: [
    CommonModule,
    UssdRoutingModule
  ]
})
export class UssdModule { }
