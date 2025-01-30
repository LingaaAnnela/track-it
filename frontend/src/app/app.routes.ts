import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'financial-tracking',
    loadChildren: () =>
      import('./features/financial-tracker/financial-tracker.module').then(
        (m) => m.FinancialTrackerModule
      ),
  },
];
