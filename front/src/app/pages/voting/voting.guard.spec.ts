import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { votingGuard } from './voting.guard';

describe('votingGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => votingGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
