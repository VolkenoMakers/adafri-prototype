import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../core/components/dashboard/dashboard.component';
import { TransactionsComponent } from '../../core/components/transactions/transactions.component';

const routes: Routes = [
  { path: 'overview', component: DashboardComponent },
  { path: 'transactions', component: TransactionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
