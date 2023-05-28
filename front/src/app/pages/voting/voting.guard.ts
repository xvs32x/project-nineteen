import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers/root.reducer';
import { combineLatest, map, tap } from 'rxjs';
import { selectIsSigned, selectMode } from '../../store/reducers/root.selectors';

export const votingGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<State>);
  const router = inject(Router)

  return combineLatest([
    store.select(selectMode),
    store.select(selectIsSigned),
  ]).pipe(
    tap(([mode, isSigned]) => {
      if (mode === 'smart' && !isSigned) {
        router.navigateByUrl('/');
      }
    }),
    map(() => {
      return true
    })
  );
};
