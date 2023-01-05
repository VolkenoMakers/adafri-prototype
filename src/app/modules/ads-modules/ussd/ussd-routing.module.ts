import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUssdComponent } from './components/create-ussd/create-ussd.component';

const routes: Routes = [
  { path: 'create',component: CreateUssdComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UssdRoutingModule { }
