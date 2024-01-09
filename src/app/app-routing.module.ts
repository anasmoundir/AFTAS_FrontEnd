import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './components/member/member-list/member-list.component';
import { HomeComponent } from './components/home/home.component';
import { CompetitionsListComponent } from './components/competition/competitions-list/competitions-list.component';
import { PodiumComponent } from './components/podiom/podiom.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CompetitionAddComponent } from './components/competition/competition-add/competition-add.component';
import { MemberSearchComponent } from './components/member/member-list/member-search/member-search.component';

const routes: Routes = [
  {path:"member-list", component : MemberListComponent},
  {path :"",component:HomeComponent},
  {path : "competion-list", component:CompetitionsListComponent},
  {path:"memberSearch", component:MemberSearchComponent},
  {path : "podiomOftheCompetition",component:PodiumComponent},
  {path : "Registration",component:RegistrationComponent},
  {path:"AddCompetition",component:CompetitionAddComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
