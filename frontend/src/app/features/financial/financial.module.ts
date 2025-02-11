import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FinancialComponent } from './financial.component';
import { PrimeNgModule } from '../primeng.module';
import { FinancialTrackingRoutingModule } from './financial-routing.module';

@NgModule({
  declarations: [FinancialComponent],
  imports: [CommonModule, MaterialModule, PrimeNgModule, FinancialTrackingRoutingModule],
  exports: [FinancialComponent],
})
export class FinancialModule {}
