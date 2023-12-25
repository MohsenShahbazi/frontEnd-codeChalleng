import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFountComponent} from './not-fount/not-fount.component';
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {LoginComponent} from "./pages/login/login.component";
import {AuthGuard} from "./auth-guard.service";

const routes: Routes = [
  {
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
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
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
        loadChildren: () => import('./pages/monitoring/monitoring.module').then(m => m.MonitoringModule)
      },
      {
        path: 'unit-list',
        loadChildren: () => import('./pages/units/units.module').then(m => m.UnitsModule)
      },
      {path: '404', component: NotFountComponent},
      {path: '**', redirectTo: ''}
    ],
    canActivate: [AuthGuard]
  },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
