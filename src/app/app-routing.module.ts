import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MobilesComponent } from "./mobiles/mobiles.component";
import { MobleEditComponent } from "./mobiles/moble-edit/moble-edit.component";
import { CompareMobilesComponent } from "./mobiles/compare-mobiles/compare-mobiles.component";
import { MobileDetailsComponent } from "./mobiles/mobile-details/mobile-details.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuard } from "./auth/login/auth.guard";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "add-mobile",
    component: MobleEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "mobiles/compare",
    component: CompareMobilesComponent,
    canActivate: [AuthGuard]
  },
  { path: "mobiles", component: MobilesComponent, canActivate: [AuthGuard] },
  {
    path: "mobiles/:id",
    component: MobileDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "mobiles/:id/edit",
    component: MobleEditComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
