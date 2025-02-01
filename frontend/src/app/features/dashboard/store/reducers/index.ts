import { createReducer, on } from '@ngrx/store';
import * as DashboardActions from '../actions';

export interface DashboardState {
  tiles: any;
}

export const initialState: DashboardState = {
  tiles: [],
};

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.tilesInfoSuccess, (state, { tiles }) => ({
    ...state,
    tiles,
  }))
);
