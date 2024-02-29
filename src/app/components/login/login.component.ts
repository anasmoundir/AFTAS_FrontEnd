import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/loginservice/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) { }
  ngOnInit(): void {
    if (this.loginService.isAuthenticated()) {
      this.router.navigate(['/competion-list']);
    }
  }

  login(): void {
    if (this.username && this.password) {
      this.loginService.login(this.username, this.password)
        .subscribe(
          response => {
            console.log('Login successful', response);
            localStorage.setItem('token', response.token);
            Swal.fire({
              icon: 'success',
              title: 'Login Successful',
              text: 'You have been successfully logged in!',
              confirmButtonText: 'OK'
            }).then(() => {
              this.router.navigate(['/competion-list']);
            });
          },
          error => {
            console.error('Login error', error);
            Swal.fire({
              icon: 'error',
              title: 'Login Error',
              text: 'the credentials are not correct or the account is not activated. Please try again.',
              confirmButtonText: 'OK'
            });
          }
        );
    } else {
      console.error('Username or password is empty');
      Swal.fire({
        icon: 'error',
        title: 'Username or Password Empty',
        text: 'Please enter your username and password.',
        confirmButtonText: 'OK'
      });
    }
  }
}
