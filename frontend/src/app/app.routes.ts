import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Landing } from './pages/landing/landing';
import { Notfound } from './pages/notfound/notfound';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: Dashboard },
      {
        path: 'learning',
        loadChildren: () =>
          import('./features/learning/learning.module').then((m) => m.LearningModule),
      },
    ],
  },
  { path: 'landing', component: Landing },
  { path: 'notfound', component: Notfound },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.routes') },
  { path: '**', redirectTo: '/notfound' },
];
