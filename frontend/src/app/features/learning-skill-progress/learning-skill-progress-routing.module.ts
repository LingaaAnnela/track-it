import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { LearningSkillProgressComponent } from './learning-skill-progress.component';

import { learningReducer } from './store/reducers';
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
    component: LearningSkillProgressComponent,
    providers: StoreProviders,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialTrackingRoutingModule {}
