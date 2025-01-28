import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { DashboardComponent } from './dashboard.component';
import { PrimeNgModule } from '../primeng.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MaterialModule, PrimeNgModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
