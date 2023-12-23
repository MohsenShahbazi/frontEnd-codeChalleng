import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnitsComponent} from "./units/units.component";

const routes: Routes = [
  {
    path: '',
    component:UnitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitsRoutingModule { }
