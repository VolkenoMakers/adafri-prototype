import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSmsComponent } from './components/create-sms/create-sms.component';

const routes: Routes = [
  { path: 'create',component: CreateSmsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsRoutingModule { }
