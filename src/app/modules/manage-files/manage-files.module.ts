import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageFilesRoutingModule } from './manage-files-routing.module';
import { DisplayAssetsComponent } from './components/display-assets/display-assets.component';
import { CoreModule } from 'src/app/core/core.module';
import { SingleMediaCardComponent } from './components/single-media-card/single-media-card.component';
import { CreateGroupContactsComponent } from '../../create-group-contacts/create-group-contacts.component';
import { CreateSingleContactComponent } from '../../create-single-contact/create-single-contact.component';


@NgModule({
  declarations: [
    DisplayAssetsComponent,
    SingleMediaCardComponent,
    CreateSingleContactComponent,
    CreateGroupContactsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    ManageFilesRoutingModule
  ]
})
export class ManageFilesModule { }
