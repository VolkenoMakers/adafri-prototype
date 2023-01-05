import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDisplayComponent } from './components/create-display/create-display.component';

const routes: Routes = [
  { path: 'create/display',component: CreateDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleAdsRoutingModule { }
