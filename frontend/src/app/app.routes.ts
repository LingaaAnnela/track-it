import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'financial',
    loadChildren: () =>
      import('./features/financial/financial.module').then((m) => m.FinancialModule),
  },
  {
    path: 'learning',
    loadChildren: () => import('./features/learning/learning.module').then((m) => m.LearningModule),
  },
];
