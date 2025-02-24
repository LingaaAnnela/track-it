// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () =>
//       import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
//   },
//   {
//     path: 'financial',
//     loadChildren: () =>
//       import('./features/financial/financial.module').then((m) => m.FinancialModule),
//   },
//   {
//     path: 'learning',
//     loadChildren: () => import('./features/learning/learning.module').then((m) => m.LearningModule),
//   },
// ];

import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Landing } from './pages/landing/landing';
import { Notfound } from './pages/notfound/notfound';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: Dashboard }],
  },
  { path: 'landing', component: Landing },
  { path: 'notfound', component: Notfound },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.routes') },
  { path: '**', redirectTo: '/notfound' },
];
