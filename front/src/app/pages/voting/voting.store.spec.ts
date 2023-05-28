import { VotingStore } from './voting.store';

describe('VotingStore', () => {
  const componentStore = new VotingStore();

  it('should be created', () => {
    expect(componentStore).toBeTruthy();
  });
});
