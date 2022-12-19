import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    RouterModule,
    CoreModule
  ]
})
export class NavigationModule { }


