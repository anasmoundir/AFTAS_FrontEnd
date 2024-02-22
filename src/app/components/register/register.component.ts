import { Component } from '@angular/core';
import { RegistrationModel } from 'src/app/models/registration.model';
import { RegisterService } from 'src/app/services/registerservice/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private registrationService: RegisterService, private snackBar: MatSnackBar) { }

  register() {
    this.registrationService.register(this.user)
      .subscribe(response => {
        console.log('User registered successfully', response);
        this.snackBar.open(response, 'Close', { duration: 3000 });
        this.showSuccessMessage = true;
        this.showErrorMessage = false;
      }, error => {
        this.snackBar.open(error +'Login failed. Please try again.', 'Close', { duration: 3000 });
        this.showErrorMessage = true;
        this.showSuccessMessage = false
      });
  }

}
