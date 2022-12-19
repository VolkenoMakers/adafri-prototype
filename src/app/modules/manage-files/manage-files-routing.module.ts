import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayAssetsComponent } from './components/display-assets/display-assets.component';

const routes: Routes = [
  { path: 'display', component: DisplayAssetsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageFilesRoutingModule { }
