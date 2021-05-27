import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuModule } from "./features/menu/menu.module";

const routes: Routes = [
  { path: "", redirectTo: "/menu", pathMatch: "full" },
  { path: "menu", loadChildren: () => MenuModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
