import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Voting } from './voting.model';
import { votingMock } from './voting.mock';

export interface VotingState {
  voting: Voting[];
  activeStep: number;
}

const initialState: VotingState = {
  voting: votingMock,
  activeStep: 1,
};

@Injectable()
export class VotingStore extends ComponentStore<VotingState> {
  constructor() {
    super(initialState);
  }
}
