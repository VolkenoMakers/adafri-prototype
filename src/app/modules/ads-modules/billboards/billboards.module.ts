import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillboardsRoutingModule } from './billboards-routing.module';
import { BillboardsComponent } from './billboards.component';


@NgModule({
  declarations: [
    BillboardsComponent
  ],
  imports: [
    CommonModule,
    BillboardsRoutingModule
  ]
})
export class BillboardsModule { }
