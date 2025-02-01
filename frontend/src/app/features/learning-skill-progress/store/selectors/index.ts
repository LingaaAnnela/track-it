import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LearningState } from '../reducers';

// Select the counter feature state
export const selectLearningState =
  createFeatureSelector<LearningState>('learnig');

// Selector to get count value
export const selectCourses = createSelector(
  selectLearningState,
  (state) => state.courses
);
