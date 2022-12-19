import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCampaignComponent } from './components/new-campaign/new-campaign.component';
import { ManageCampaignRoutingModule } from './manage-campaign-routing.module';
import { ListCampaignsComponent } from './components/list-campaigns/list-campaigns.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    NewCampaignComponent,
    ListCampaignsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ManageCampaignRoutingModule
  ]
})
export class ManageCampaignModule { }
