import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  //new way of importing lazy loading after angular 9
  { path: "", loadChildren: () => import('./location/locations.module').then(m => m.LocationsModule) },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PageNotFoundComponent];
