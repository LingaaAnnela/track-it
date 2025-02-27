import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { Notfound } from './pages/notfound/notfound';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './core/components/login/login.component';

import { dashboardReducer } from './dashboard/store/reducers';

import * as tileEffects from './dashboard/store/effects/tiles.effects';

export const StoreProviders = [
  provideState({ name: 'dashboard', reducer: dashboardReducer }),
  provideEffects([tileEffects]),
];

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent, providers: StoreProviders },
      {
        path: 'portfolio',
        loadChildren: () => import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),
      },
      {
        path: 'learning',
        loadChildren: () => import('./learning/learning.module').then((m) => m.LearningModule),
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
      },
    ],
  },
  { path: 'notfound', component: Notfound },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/notfound' },
];
