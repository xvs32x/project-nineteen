import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './activity.model';

@Injectable()
export class ActivitiesService {

  constructor(
    private http: HttpClient
  ) { }

  fetchActivities(userId: string): Observable<Activity[]> {
    return this.http.get<Activity[]>('api/get_recommendations/', { params: { user_id: userId ? userId : 1 } });
  }
}
