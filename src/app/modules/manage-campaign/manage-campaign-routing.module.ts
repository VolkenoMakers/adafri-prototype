import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCampaignsComponent } from './components/list-campaigns/list-campaigns.component';


const routes: Routes = [
  { path: 'list', component: ListCampaignsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCampaignRoutingModule { }
