import { createFeatureSelector, createSelector } from '@ngrx/store';
import { rootFeatureKey, State } from './root.reducer';

export const selectRoot = createFeatureSelector<State>(rootFeatureKey);

export const selectIsVotingPassed = createSelector(
  selectRoot,
  state => state.isVotingPassed,
)

export const selectIsSigned = createSelector(
  selectRoot,
  state => state.isSigned,
)

export const selectMode = createSelector(
  selectRoot,
  state => state.mode,
)

export const selectFilter = createSelector(
  selectRoot,
  state => state.filter,
)
