import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationMonitorComponent } from './components/display/station-monitor/station-monitor.component';
import { TrainMonitorComponent } from './components/display/train-monitor/train-monitor.component';
import { SchedulePlannerComponent } from './components/planning/schedule-planner/schedule-planner.component';

@NgModule({
  declarations: [AppComponent, StationMonitorComponent, TrainMonitorComponent, SchedulePlannerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
