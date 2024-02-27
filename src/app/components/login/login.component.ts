import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
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
            this.router.navigate(['/competion-list']);
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
