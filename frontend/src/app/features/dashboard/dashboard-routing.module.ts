import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { DashboardComponent } from './dashboard.component';
import { dashboardReducer } from './store/reducers';
import * as tileEffects from './store/effects/tiles.effects';

export const StoreProviders = [
  provideState({ name: 'dashboard', reducer: dashboardReducer }),
  provideEffects([tileEffects]),
];

const routes: Routes = [
  { path: '', component: DashboardComponent, providers: StoreProviders },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
