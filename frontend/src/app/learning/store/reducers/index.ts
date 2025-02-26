import { createReducer, on } from '@ngrx/store';
import { Course } from '../../interfaces/course.interface';

import * as LearningActions from '../actions';

export interface LearningState {
  courses: Course[];
}

export const initialState: LearningState = {
  courses: [],
};

export const learningReducer = createReducer(
  initialState,
  on(LearningActions.CoursesInfoSuccess, (state, { courses }) => ({
    ...state,
    courses,
  })),
);
