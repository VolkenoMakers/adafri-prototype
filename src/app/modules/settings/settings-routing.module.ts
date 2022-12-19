import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountAccessComponent } from './components/account-access/account-access.component';

const routes: Routes = [
  { path: 'account-access', component: AccountAccessComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
