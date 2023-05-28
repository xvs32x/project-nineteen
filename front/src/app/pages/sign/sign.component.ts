import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiButtonModule, TuiErrorModule, TuiHintModule } from '@taiga-ui/core';
import { TUI_VALIDATION_ERRORS, TuiFieldErrorPipeModule, TuiInputModule } from '@taiga-ui/kit';
import { State } from '../../store/reducers/root.reducer';
import { Store } from '@ngrx/store';
import { RootActions } from '../../store/reducers/root.actions';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [CommonModule, TuiButtonModule, ReactiveFormsModule, TuiInputModule, TuiHintModule, TuiErrorModule, TuiFieldErrorPipeModule],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Поле обязательно',
      }
    }
  ],
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignComponent {
  form = new FormGroup({
    user_id: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
  });

  isLoading: boolean;

  constructor(private store: Store<State>) {
  }

  submit() {
    this.store.dispatch(RootActions.markSigned({ userId: this.form.value.user_id }));
  }

}
