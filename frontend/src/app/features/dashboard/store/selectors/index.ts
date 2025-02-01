import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DashboardState } from '../reducers';

// Select the counter feature state
export const selectDashboardState =
  createFeatureSelector<DashboardState>('dashboard');

// Selector to get count value
export const selectTiles = createSelector(
  selectDashboardState,
  (state) => state.tiles
);
