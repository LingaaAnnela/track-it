import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'financial-tracking',
    loadChildren: () =>
      import('./features/financial-tracker/financial-tracker.module').then(
        (m) => m.FinancialTrackerModule,
      ),
  },
  {
    path: 'learning-skill-progress',
    loadChildren: () =>
      import('./features/learning-skill-progress/learning-skill-progress.module').then(
        (m) => m.LearningSkillProgressModule,
      ),
  },
];
