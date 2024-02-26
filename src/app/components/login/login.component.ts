import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/loginservice/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService) { }

  login(): void {
    if (this.username && this.password) {
      this.loginService.login(this.username, this.password)
        .subscribe(
          response => {
            console.log('Login successful', response);
            localStorage.setItem('token', response.token);
            
          },
          error => {
            console.error('Login error', error);
          }
        );
    } else {
      console.error('Username or password is empty');
    }
  }
}
