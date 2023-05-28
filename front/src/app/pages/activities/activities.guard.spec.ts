import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { activitiesGuard } from './activities.guard';

describe('activitiesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activitiesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
