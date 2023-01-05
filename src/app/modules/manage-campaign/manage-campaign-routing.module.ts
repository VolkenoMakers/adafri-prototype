import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCampaignsComponent } from './components/list-campaigns/list-campaigns.component';


const routes: Routes = [
  // { path: 'list', component: ListCampaignsComponent },
  { path: 'google-ads', loadChildren: () => import('./../ads-modules/google-ads/google-ads.module').then(m => m.GoogleAdsModule) },
  { path: 'facebook-ads', loadChildren: () => import('./../ads-modules/facebook-ads/facebook-ads.module').then(m => m.FacebookAdsModule) },
  { path: 'sms', loadChildren: () => import('./../ads-modules/sms/sms.module').then(m => m.SmsModule) },
  { path: 'voice', loadChildren: () => import('./../ads-modules/voice/voice.module').then(m => m.VoiceModule) },
  { path: 'linkedin-ads', loadChildren: () => import('./../ads-modules/linkedin-ads/linkedin-ads.module').then(m => m.LinkedinAdsModule) },
  { path: 'billboards', loadChildren: () => import('./../ads-modules/billboards/billboards.module').then(m => m.BillboardsModule) },
  { path: 'ussd', loadChildren: () => import('./../ads-modules/ussd/ussd.module').then(m => m.UssdModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCampaignRoutingModule { }
