import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { LearningSkillProgressComponent } from './learning-skill-progress.component';
import { learningSkillProgressReducer } from './store/reducers';

export const StoreProviders = [
  provideState({
    name: 'learnig-skill-progress',
    reducer: learningSkillProgressReducer,
  }),
  provideEffects([]),
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
