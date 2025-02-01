import { createAction, props } from '@ngrx/store';
import { TrackitTile } from '../../../../core/interfaces';

export const initialize = createAction('[Learning Skill Progress] Initialize');

export const getCoursesInfo = createAction(
  '[Learning Skill Progress] Get Courses Info'
);
export const CoursesInfoSuccess = createAction(
  '[Learning Skill Progress] Courses Info Success',
  props<{ courses: TrackitTile[] }>()
);
export const CoursesInfoFailure = createAction(
  '[Learning Skill Progress] Courses Info Failure'
);
