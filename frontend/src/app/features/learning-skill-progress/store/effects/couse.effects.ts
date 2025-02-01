import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ApiService } from '../../services/api.service';
import * as LearningActions from '../actions';

export const onInitialize$ = createEffect(
  () => {
    return inject(Actions).pipe(
      ofType(LearningActions.initialize),
      map(() => LearningActions.getCoursesInfo())
    );
  },
  { functional: true }
);

export const onGetCoursesInfo = createEffect(
  (actions$ = inject(Actions), apiService = inject(ApiService)) => {
    return actions$.pipe(
      ofType(LearningActions.getCoursesInfo),
      switchMap(() =>
        apiService.getCourses().pipe(
          map((courses) => LearningActions.CoursesInfoSuccess({ courses })),
          catchError((error: { message: string }) =>
            of(LearningActions.CoursesInfoFailure())
          )
        )
      )
    );
  },
  { functional: true }
);
