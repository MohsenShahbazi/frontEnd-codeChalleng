import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFountComponent } from './not-fount/not-fount.component';
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {UnitsModule} from "./units/units.module";

const routes: Routes = [{
  path: '',
  data: {
    title: 'Home'
  },
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'monitoring',
      loadChildren: () => import('./monitoring/monitoring.module').then(m => m.MonitoringModule)
    },
    {
      path: 'unit-list',
      loadChildren: () => import('./units/units.module').then(m => m.UnitsModule)
    },
    { path: '404', component: NotFountComponent },
    { path: '**', redirectTo: '' }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
