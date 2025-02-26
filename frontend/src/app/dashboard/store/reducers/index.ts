import { createReducer, on } from '@ngrx/store';
import { TrackitTile } from '../../../core/interfaces';
import * as DashboardActions from '../actions';

export interface DashboardState {
  tiles: TrackitTile[];
}

export const initialState: DashboardState = {
  tiles: [],
};

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.tilesInfoSuccess, (state, { tiles }) => ({
    ...state,
    tiles,
  })),
);
