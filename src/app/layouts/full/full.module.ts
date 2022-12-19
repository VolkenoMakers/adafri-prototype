import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullRoutingModule } from './full-routing.module';
import { FullComponent } from './full.component';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
    FullComponent
  ],
  imports: [
    CommonModule,
    FullRoutingModule,
    CoreModule
  ]
})
export class FullModule { }
