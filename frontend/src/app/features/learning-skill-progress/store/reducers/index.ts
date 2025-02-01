import { createReducer, on } from '@ngrx/store';
import { TrackitTile } from '../../../../core/interfaces';
import * as LearningActions from '../actions';

export interface LearningState {
  courses: TrackitTile[];
}

export const initialState: LearningState = {
  courses: [],
};

export const learningReducer = createReducer(
  initialState,
  on(LearningActions.CoursesInfoSuccess, (state, { courses }) => ({
    ...state,
    courses,
  }))
);
