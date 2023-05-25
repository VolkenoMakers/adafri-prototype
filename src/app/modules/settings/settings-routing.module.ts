import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountAccessComponent } from './components/account-access/account-access.component';
import { SettingProfileComponent } from './components/setting-profile/setting-profile.component';

const routes: Routes = [
  { path: 'account-access', component: AccountAccessComponent },
  { path: 'profile', component: SettingProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
