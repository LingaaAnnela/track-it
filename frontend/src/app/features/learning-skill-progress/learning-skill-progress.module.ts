import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { LearningSkillProgressComponent } from './learning-skill-progress.component';
import { PrimeNgModule } from '../primeng.module';
import { FinancialTrackingRoutingModule } from './learning-skill-progress-routing.module';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [LearningSkillProgressComponent],
  imports: [CommonModule, MaterialModule, PrimeNgModule, FinancialTrackingRoutingModule],
  providers: [ApiService],
  exports: [LearningSkillProgressComponent],
})
export class LearningSkillProgressModule {}
