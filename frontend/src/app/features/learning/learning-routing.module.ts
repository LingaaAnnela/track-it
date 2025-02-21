import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { LearningComponent } from './learning.component';

import { learningReducer } from './store/reducers';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

import * as courseEffects from './store/effects/couse.effects';

export const StoreProviders = [
  provideState({
    name: 'learnig',
    reducer: learningReducer,
  }),
  provideEffects([courseEffects]),
];

const routes: Routes = [
  {
    path: '',
    component: LearningComponent,
    providers: StoreProviders,
  },
  {
    path: 'course-details',
    component: CourseDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialTrackingRoutingModule {}
