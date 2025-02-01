import { createAction, props } from '@ngrx/store';
import { DashboardTile } from '../../interfaces';

export const initialize = createAction('[Dashboard] Initialize');

export const getTilesInfo = createAction('[Dashboard] Get Tiles Info');
export const tilesInfoSuccess = createAction(
  '[Dashboard] Tiles Info Success',
  props<{ tiles: DashboardTile[] }>()
);
export const tilesInfoFailure = createAction('[Dashboard] Tiles Info Failure');
