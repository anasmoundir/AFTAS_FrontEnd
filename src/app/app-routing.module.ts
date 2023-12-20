import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './components/member-list/member-list.component';
import { HomeComponent } from './components/home/home.component';
import { CompetitionService } from './services/competitionservice/competition.service';
import { CompetitionsListComponent } from './components/competitions-list/competitions-list.component';
import { PodiumService } from './services/podiumservice/podium.service';
import { PodiomComponent } from './components/podiom/podiom.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path:"member-list", component : MemberListComponent},
  {path :"",component:HomeComponent},
  {path : "competion-list", component:CompetitionsListComponent},
  {path : "registration", component:RegistrationComponent},
  {path : "podiomOftheCompetition",component:PodiomComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
