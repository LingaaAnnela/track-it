import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { FinancialTrackerComponent } from './financial-tracker.component';
import { financialTrackingReducer } from './store/reducers';

export const StoreProviders = [
  provideState({
    name: 'financial',
    reducer: financialTrackingReducer,
  }),
  provideEffects([]),
];

const routes: Routes = [
  { path: '', component: FinancialTrackerComponent, providers: StoreProviders },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialTrackingRoutingModule {}
