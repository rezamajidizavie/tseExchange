import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { DepositComponent } from './deposit.component';

const routes: Routes = [
  {
    path: "deposit",
    component: DepositComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DepositRoutingModule { }
