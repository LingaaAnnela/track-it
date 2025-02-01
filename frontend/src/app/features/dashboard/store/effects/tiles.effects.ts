import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { DashboardApiService } from '../../services/dashboard-api.service';
import * as DashboardActions from '../actions';

export const onInitialize$ = createEffect(
  () => {
    return inject(Actions).pipe(
      ofType(DashboardActions.initialize),
      map(() => DashboardActions.getTilesInfo())
    );
  },
  { functional: true }
);

export const onGetTilesInfo = createEffect(
  (actions$ = inject(Actions), apiService = inject(DashboardApiService)) => {
    return actions$.pipe(
      ofType(DashboardActions.getTilesInfo),
      switchMap(() =>
        apiService.getTiles().pipe(
          map((tiles) => DashboardActions.tilesInfoSuccess({ tiles })),
          catchError((error: { message: string }) =>
            of(DashboardActions.tilesInfoFailure())
          )
        )
      )
    );
  },
  { functional: true }
);
