import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "intro",
    pathMatch: "full"
  },
  {
    path: "intro",
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
