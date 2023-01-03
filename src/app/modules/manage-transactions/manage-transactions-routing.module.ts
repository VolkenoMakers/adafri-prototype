import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayTransactionsComponent } from './components/display-transactions/display-transactions.component';
// import { DisplayAssetsComponent } from './components/display-assets/display-assets.component';

const routes: Routes = [
  { path: 'list', component: DisplayTransactionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageTransactionsRoutingModule { }
