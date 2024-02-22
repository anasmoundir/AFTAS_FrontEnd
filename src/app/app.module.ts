import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MemberListComponent } from './components/member/member-list/member-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MemberModalComponent } from './components/member/member-list/member-modal/member-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { CompetitionsListComponent } from './components/competition/competitions-list/competitions-list.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PodiumComponent } from './components/podiom/podiom.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { WinnerCardComponent } from './components/winner-card/winner-card.component';
import { CompetitionAddComponent } from './components/competition/competition-add/competition-add.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MemberSearchComponent } from './components/member/member-list/member-search/member-search.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ActivationComponent } from './components/activation/activation.component';
import { MatSnackBar } from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MemberListComponent,
    HomeComponent,
    MemberModalComponent,
    ConfirmDialogComponent,
    CompetitionsListComponent,
    RegistrationComponent,
    PodiumComponent,
    CompetitionsListComponent,
    WinnerCardComponent,
    CompetitionAddComponent,
    MemberSearchComponent,
    LoginComponent,
    RegisterComponent,
    ActivationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatMenuModule,
    MatSnackBarModule,
  ],


  providers: [MatDialog ],
  bootstrap: [AppComponent]
})
export class AppModule { }
