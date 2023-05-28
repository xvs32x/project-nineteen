import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotingComponent } from './pages/voting/voting.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { activitiesGuard } from './pages/activities/activities.guard';
import { SignComponent } from './pages/sign/sign.component';
import { votingGuard } from './pages/voting/voting.guard';

const routes: Routes = [
  {
    path: '',
    component: SignComponent,
  },
  {
    path: 'voting',
    component: VotingComponent,
    canActivate: [votingGuard]
  },
  {
    path: 'activities',
    component: ActivitiesComponent,
    canActivate: [activitiesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
