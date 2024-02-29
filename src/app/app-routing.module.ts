import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './components/member/member-list/member-list.component';
import { HomeComponent } from './components/home/home.component';
import { CompetitionsListComponent } from './components/competition/competitions-list/competitions-list.component';
import { PodiumComponent } from './components/podiom/podiom.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CompetitionAddComponent } from './components/competition/competition-add/competition-add.component';
import { MemberSearchComponent } from './components/member/member-list/member-search/member-search.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ActivationComponent } from './components/activation/activation.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { adminGuard } from 'src/guards/admin.guard';
import { juryGuard } from 'src/guards/jury.guard';
import { authGuard } from 'src/guards/auth.guard';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"member-list", component : MemberListComponent,canActivate:[adminGuard]},
  {path :"",component:HomeComponent},
  {path : "competion-list", component:CompetitionsListComponent,canActivate:[authGuard]},
  {path:"memberSearch", component:MemberSearchComponent,canActivate:[authGuard]},
  {path : "podiomOftheCompetition",component:PodiumComponent,canActivate:[authGuard]},
  {path : "Registration",component:RegistrationComponent,canActivate:[juryGuard],canActivateChild:[authGuard]},
  {path:"AddCompetition",component:CompetitionAddComponent,canActivate:[adminGuard],canActivateChild:[juryGuard]},
  {path: "activation",component:ActivationComponent,canActivate:[adminGuard]},
  {path: "forbidden",component:ForbiddenComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
