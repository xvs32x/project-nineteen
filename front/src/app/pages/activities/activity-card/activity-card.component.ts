import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { Activity } from '../activity.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [CommonModule, TuiIslandModule, TuiButtonModule],
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityCardComponent {
  @Input() activity: Activity;

  isLoading$ = new BehaviorSubject(false);
  isDisabled$ = new BehaviorSubject(false);

  subscribe() {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.isDisabled$.next(true);
    }, 1000);
  }

}
