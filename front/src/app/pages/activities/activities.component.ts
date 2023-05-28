import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiLinkModule } from '@taiga-ui/core';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, TuiIslandModule, TuiLinkModule],
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesComponent {

}
