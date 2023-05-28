import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const RootActions = createActionGroup({
  source: 'Root',
  events: {
    'Mark Voting Passed': emptyProps(),
    'Mark Signed': emptyProps(),
    'Change mode': props<{ mode: string }>(),
    'Change filter': props<{ filter: any }>(),
  }
});
