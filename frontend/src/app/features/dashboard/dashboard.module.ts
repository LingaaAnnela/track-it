import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { DashboardComponent } from './dashboard.component';
import { PrimeNgModule } from '../primeng.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PrimeNgModule,
    DashboardRoutingModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
