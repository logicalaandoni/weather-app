import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


// Routes
import { LocationsRoutingModule, routingComponents } from "./locations-routing.module";
// Modules
import { SharedModule } from "../shared/shared.module";
// Components
import * as components from "./components";

@NgModule({
  declarations: [...components.locationsComponents, ...routingComponents],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    LocationsRoutingModule,
  ],
  providers: [],
  exports: [...components.locationsComponents, ...routingComponents]
})
export class LocationsModule { }
