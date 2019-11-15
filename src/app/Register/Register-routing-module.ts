import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { RegisterComponent } from './Register.component';

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
