import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import {NgxMapboxGLModule} from "ngx-mapbox-gl";


@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        NgxMapboxGLModule
    ]
})
export class HomeModule { }
