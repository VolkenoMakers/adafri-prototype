import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UssdComponent } from './ussd.component';

const routes: Routes = [{ path: '', component: UssdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UssdRoutingModule { }
