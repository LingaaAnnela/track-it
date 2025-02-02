import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FinancialTrackerComponent } from './financial-tracker.component';
import { PrimeNgModule } from '../primeng.module';
import { FinancialTrackingRoutingModule } from './financial-tracker-routing.module';

@NgModule({
  declarations: [FinancialTrackerComponent],
  imports: [CommonModule, MaterialModule, PrimeNgModule, FinancialTrackingRoutingModule],
  exports: [FinancialTrackerComponent],
})
export class FinancialTrackerModule {}
