import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const RootActions = createActionGroup({
  source: 'Root',
  events: {
    'Mark Voting Passed': emptyProps(),
    'Mark Signed': props<{ userId: string }>(),
    'Change mode': props<{ mode: string }>(),
    'Change filter': props<{ filter: any }>(),
  }
});
