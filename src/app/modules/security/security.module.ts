import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CoreModule } from '../../core/core.module';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class SecurityModule { }
