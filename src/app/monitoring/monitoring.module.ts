import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoringRoutingModule } from './monitoring-routing.module';
import { MonitoringComponent } from './monitoring/monitoring.component';


@NgModule({
  declarations: [
    MonitoringComponent
  ],
  imports: [
    CommonModule,
    MonitoringRoutingModule
  ]
})
export class MonitoringModule { }
