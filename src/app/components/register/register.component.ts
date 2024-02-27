import { Component } from '@angular/core';
import { RegistrationModel } from 'src/app/models/registration.model';
import { RegisterService } from 'src/app/services/registerservice/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: RegistrationModel = {
    username: '',
    email: '',
    password: ''
  };
  showSuccessMessage = false;
  showErrorMessage = false;

  constructor(private registrationService: RegisterService, private snackBar: MatSnackBar, private router: Router) {}
  ngOnInit(): void {
    if (this.registrationService.isAuthenticated()) {
      this.router.navigate(['/competion-list']);
    }
  }
  register() {
    this.registrationService.register(this.user)
      .subscribe(
        (response) => {
          console.log('Response:', response);
          if (response && response.status === 200) {
            console.error('Unexpected response from server:', response);
            this.showSuccessMessage = false;
            this.showErrorMessage = true;
            this.snackBar.open('Something went wrong. Please try again.', 'Close', { duration: 3000 });
          } else {
            console.log('User registered successfully');
            this.showSuccessMessage = true;
            this.showErrorMessage = false;
            this.router.navigate(['/login']);
          }
        },
        (error) => {
          console.error('Registration failed:', error);

          this.showSuccessMessage = false;
          this.showErrorMessage = true;
          this.snackBar.open(error, 'Close', { duration: 3000 });
        }
      );
  }
  }
