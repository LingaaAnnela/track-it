import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { LearningComponent } from './learning.component';
import { PrimeNgModule } from '../primeng.module';
import { FinancialTrackingRoutingModule } from './learning-routing.module';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [LearningComponent],
  imports: [CommonModule, MaterialModule, PrimeNgModule, FinancialTrackingRoutingModule],
  providers: [ApiService],
  exports: [LearningComponent],
})
export class LearningModule {}
