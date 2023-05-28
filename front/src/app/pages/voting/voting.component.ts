import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiModeModule, TuiNotificationModule } from '@taiga-ui/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { VotingStore } from './voting.store';
import { takeUntil, tap } from 'rxjs';
import { TuiCheckboxLabeledModule, TuiRadioLabeledModule } from '@taiga-ui/kit';
import { TuiLetModule } from '@taiga-ui/cdk';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers/root.reducer';
import { RootActions } from '../../store/reducers/root.actions';

@Component({
  selector: 'app-voting',
  standalone: true,
    imports: [CommonModule, TuiNotificationModule, TuiButtonModule, TuiModeModule, ReactiveFormsModule, TuiRadioLabeledModule, TuiLetModule, TuiCheckboxLabeledModule],
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [VotingStore],
})
export class VotingComponent implements OnInit {
  voting$ = this.store.select(state => state.voting);

  form = new FormGroup({
    questions: new FormArray<any>([]),
  });

  constructor(
    private store: VotingStore,
    private rootStore: Store<State>,
  ) {
  }

  ngOnInit() {
    this.voting$.pipe(
      tap(voting => {
        voting.forEach((voting, index) => {
          this.form.controls.questions.setControl(
            index,
            new FormGroup(voting.options.reduce((acc, option) => ({ ...acc, [option.id]: new FormControl(false) }), {}), { validators: this.requiredOne }),
          );
        });
      }),
      tap(questions => this.form.patchValue({ questions }, { emitEvent: false })),
      takeUntil(this.store.destroy$),
    ).subscribe();
  }

  submit() {
    this.rootStore.dispatch(RootActions.markVotingPassed());
  }

  requiredOne(formArray: any): ValidationErrors | null {
    if (Object.values(formArray.controls).find((control: any) => control.value === true)) {
      return null;
    }
    return { requiredOne: true };
  }

}
