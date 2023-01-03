import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleAdsComponent } from './google-ads.component';

const routes: Routes = [{ path: '', component: GoogleAdsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleAdsRoutingModule { }
