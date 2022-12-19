import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageFilesRoutingModule } from './manage-files-routing.module';
import { DisplayAssetsComponent } from './components/display-assets/display-assets.component';


@NgModule({
  declarations: [
    DisplayAssetsComponent,
  ],
  imports: [
    CommonModule,
    ManageFilesRoutingModule
  ]
})
export class ManageFilesModule { }
