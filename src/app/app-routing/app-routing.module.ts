import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { HomeComponent } from "../home/home.component";
import { NavigationGuardService } from "../navigation-guard.service";

const routes: Routes = [
  { path: "about", component: AboutComponent, canDeactivate: [NavigationGuardService] },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
