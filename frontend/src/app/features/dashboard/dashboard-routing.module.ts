import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { DashboardComponent } from './dashboard.component';
import { dashboardReducer } from './store/reducers';

export const StoreProviders = [
  provideState({ name: 'dashboard', reducer: dashboardReducer }),
  provideEffects([]),
];

const routes: Routes = [
  { path: '', component: DashboardComponent, providers: StoreProviders },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
