import { ActivitiesStore } from './activities.store';

describe('ActivitiesStore', () => {
  const componentStore = new ActivitiesStore();

  it('should be created', () => {
    expect(componentStore).toBeTruthy();
  });
});
