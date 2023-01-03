import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedinAdsComponent } from './linkedin-ads.component';

const routes: Routes = [{ path: '', component: LinkedinAdsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkedinAdsRoutingModule { }
