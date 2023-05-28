import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  TuiDataListWrapperModule,
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiRadioBlockModule,
  TuiSelectModule
} from '@taiga-ui/kit';
import {
  TuiErrorModule,
  TuiGroupModule,
  TuiHintModule,
  TuiLabelModule,
  TuiTextfieldControllerModule
} from '@taiga-ui/core';
import { VotingComponent } from '../../pages/voting/voting.component';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from '../../store/reducers/root.reducer';
import { Store } from '@ngrx/store';
import { RootActions } from '../../store/reducers/root.actions';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule, TuiInputModule, TuiErrorModule, ReactiveFormsModule, TuiHintModule, TuiFieldErrorPipeModule, TuiLabelModule, TuiSelectModule, TuiTextfieldControllerModule, TuiDataListWrapperModule, TuiRadioBlockModule, TuiGroupModule, VotingComponent],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent implements OnInit {
  mode = new FormGroup({
    mode: new FormControl('smart'),
  });
  filter = new FormGroup({});
  options = [
    'One', 'Two', 'Three',
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rootStore: Store<State>,
  ) {
  }

  ngOnInit() {
    this.mode.valueChanges.subscribe(({ mode }) => this.rootStore.dispatch(RootActions.changeMode({ mode })));
    // this.form.valueChanges.pipe(
    //   tap(queryParams => this.router.navigate([], { queryParams, queryParamsHandling: 'merge', replaceUrl: true }))
    // ).subscribe();
    // this.route.queryParams.pipe(
    //   tap(queryParams => this.form.patchValue(queryParams, {  emitEvent: false })),
    // ).subscribe();
    // this.form.controls.mode.valueChanges.pipe(
    //   withLatestFrom(this.isVotingPassed$),
    //   tap(([mode, isVotingPassed]) => {
    //     if (mode === 'simple') {
    //       this.router.navigateByUrl('/activities');
    //     }
    //     if (mode === 'smart') {
    //       this.router.navigateByUrl('/');
    //     }
    //   }),
    // ).subscribe();
  }

}
