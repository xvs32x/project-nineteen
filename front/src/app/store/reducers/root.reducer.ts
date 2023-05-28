import { createReducer, on } from '@ngrx/store';
import { RootActions } from './root.actions';

export const rootFeatureKey = 'root';

export interface State {
  isVotingPassed: boolean;
  isSigned: boolean;
  mode: string;
  filter: object;
}

export const initialState: State = {
  isVotingPassed: false,
  isSigned: false,
  mode: 'smart',
  filter: {},
};

export const reducer = createReducer(
  initialState,
  on(RootActions.markVotingPassed, state => ({ ...state, isVotingPassed: true })),
  on(RootActions.markSigned, state => ({ ...state, isSigned: true })),
  on(RootActions.changeMode, (state, action) => ({ ...state, mode: action.mode })),
  on(RootActions.changeFilter, (state, action) => ({ ...state, filter: action.filter })),
);

