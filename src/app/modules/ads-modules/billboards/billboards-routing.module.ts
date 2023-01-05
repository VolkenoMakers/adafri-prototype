import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBillboardComponent } from './components/create-billboard/create-billboard.component';


const routes: Routes = [
  { path: 'create',component: CreateBillboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillboardsRoutingModule { }
