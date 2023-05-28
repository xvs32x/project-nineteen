import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers/root.reducer';
import { inject } from '@angular/core';
import { selectIsVotingPassed, selectMode } from '../../store/reducers/root.selectors';
import { combineLatest, map, tap } from 'rxjs';

export const activitiesGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<State>);
  const router = inject(Router)

  return combineLatest([
    store.select(selectMode),
    store.select(selectIsVotingPassed),
  ]).pipe(
    tap(([mode, isVotingPassed]) => {
      if (mode === 'smart' && !isVotingPassed) {
        router.navigateByUrl('/voting');
      }
    }),
    map(() => {
      return true
    })
  );
};
