import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { DisplayTransactionsComponent } from "./components/display-transactions/display-transactions.component";
import { ManageTransactionsRoutingModule } from "./manage-transactions-routing.module";

@NgModule({
    declarations: [
        DisplayTransactionsComponent,
    ],
    imports: [
      CommonModule,
      CoreModule,
      ManageTransactionsRoutingModule
    ]
  })
  export class ManageTransactionsModule { }
  