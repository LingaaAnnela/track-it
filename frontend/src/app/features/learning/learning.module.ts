import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { LearningComponent } from './learning.component';
import { PrimeNgModule } from '../primeng.module';
import { FinancialTrackingRoutingModule } from './learning-routing.module';
import { ApiService } from './services/api.service';
import { AddCourseComponent } from './components/add-course/add-course.component';

@NgModule({
  declarations: [LearningComponent, AddCourseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimeNgModule,
    FinancialTrackingRoutingModule,
  ],
  providers: [ApiService],
  exports: [LearningComponent],
})
export class LearningModule {}
