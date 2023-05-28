import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs';
import { Router } from '@angular/router';
import { RootActions } from './root.actions';
import { Store } from '@ngrx/store';
import { State } from './root.reducer';
import { selectIsSigned, selectIsVotingPassed } from './root.selectors';

@Injectable()
export class RootEffects {

  markSigned$ = createEffect(() => this.actions$.pipe(
    ofType(RootActions.markSigned),
    tap(() => this.router.navigateByUrl('/voting')),
  ), { dispatch: false });

  markVotingPassed$ = createEffect(() => this.actions$.pipe(
    ofType(RootActions.markVotingPassed),
    tap(() => this.router.navigateByUrl('/activities')),
  ), { dispatch: false });

  changeMode$ = createEffect(() => this.actions$.pipe(
    ofType(RootActions.changeMode),
    withLatestFrom(this.store.select(selectIsSigned), this.store.select(selectIsVotingPassed)),
    tap(([{ mode }, isSigned, isVotingPassed]) => {
      if (mode === 'simple') {
        this.router.navigateByUrl('/activities');
      }
      if (mode === 'smart' && !isSigned) {
        this.router.navigateByUrl('/');
      }
      if (mode === 'smart' && !isVotingPassed) {
        this.router.navigateByUrl('/voting');
      }
    }),
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<State>
  ) {}
}
