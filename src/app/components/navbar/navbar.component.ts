import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginservice/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: boolean | undefined;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isLoggedIn = isAuthenticated;
    });
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}

