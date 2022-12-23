import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageFilesRoutingModule } from './manage-files-routing.module';
import { DisplayAssetsComponent } from './components/display-assets/display-assets.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    DisplayAssetsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    ManageFilesRoutingModule
  ]
})
export class ManageFilesModule { }
