import { Component } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { Account } from 'src/app/models/account.model';
import { ActivationService } from 'src/app/services/activationservice/activation.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent {
  username: string = '';
  deactivatedUsers: User[] | undefined;

  constructor(private activationService: ActivationService) {}

  ngOnInit(): void {
    this.fetchDeactivatedUsers();
  }

  activeUser() {
    if (this.username && this.username.trim() !== '') {
      this.activationService.activateUser(this.username).subscribe(
        () => {
          console.log('User activated successfully');
          this.fetchDeactivatedUsers();
        },
        (error) => {
          console.error('Error activating user:', error);
        }
      );
    } else {
      console.error('Username cannot be empty');
    }
  }

  fetchDeactivatedUsers() {
    this.activationService.getDeactivatedUsers().subscribe(
      (users) => {
        this.deactivatedUsers = users;
      },
      (error) => {
        console.error('Error fetching deactivated users:', error);
      }
    );
  }
}
