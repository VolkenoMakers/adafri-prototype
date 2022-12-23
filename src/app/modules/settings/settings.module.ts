import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { AccountAccessComponent } from './components/account-access/account-access.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    AccountAccessComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
