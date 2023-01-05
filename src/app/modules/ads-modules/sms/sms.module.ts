import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsRoutingModule } from './sms-routing.module';
import { CreateSmsComponent } from './components/create-sms/create-sms.component';


@NgModule({
  declarations: [
    CreateSmsComponent
  ],
  imports: [
    CommonModule,
    SmsRoutingModule
  ]
})
export class SmsModule { }
