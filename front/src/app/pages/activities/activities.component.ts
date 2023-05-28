import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { ActivitiesService } from './activities.service';
import { ActivitiesStore } from './activities.store';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers/root.reducer';
import { selectUserid } from '../../store/reducers/root.selectors';
import { ActivityCardComponent } from './activity-card/activity-card.component';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, TuiIslandModule, TuiLinkModule, HttpClientModule, TuiButtonModule, ActivityCardComponent],
  providers: [
    ActivitiesService,
    ActivitiesStore,
  ],
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesComponent implements OnInit {

  activities$ = this.store.activities$;

  constructor(
    private service: ActivitiesService,
    private store: ActivitiesStore,
    private rootStore: Store<State>
  ) {
  }

  ngOnInit() {
    this.store.loadActivities(this.rootStore.select(selectUserid));
  }

}
