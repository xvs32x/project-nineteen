import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, switchMap, tap } from 'rxjs';
import { ActivitiesService } from './activities.service';
import { Activity } from './activity.model';

export interface ActivitiesState {
  activities: Activity[];
}

const initialState: ActivitiesState = {
  activities: [],
};

@Injectable()
export class ActivitiesStore extends ComponentStore<ActivitiesState> {

  activities$ = this.select(state => state.activities);

  loadActivities = this.effect((userId$: Observable<string>) => {
    return userId$.pipe(
      switchMap(userId => this.service.fetchActivities(userId).pipe(
        tap(activities => this.patchState({ activities })),
      ))
    );
  });

  constructor(
    private service: ActivitiesService,
  ) {
    super(initialState);
  }
}
