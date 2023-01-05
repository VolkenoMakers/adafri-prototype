import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillboardsRoutingModule } from './billboards-routing.module';
import { CreateBillboardComponent } from './components/create-billboard/create-billboard.component';
import { CoreModule } from 'src/app/core/core.module';
import { PreviewPannelsComponent } from './components/preview-pannels/preview-pannels.component';


@NgModule({
  declarations: [
    CreateBillboardComponent,
    PreviewPannelsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    BillboardsRoutingModule
  ]
})
export class BillboardsModule { }
