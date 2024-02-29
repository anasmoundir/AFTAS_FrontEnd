import { Component } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { ActivationService } from 'src/app/services/activationservice/activation.service';
import Swal from 'sweetalert2';

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
          Swal.fire({
            icon: 'success',
            title: 'User activated successfully',
            showConfirmButton: false,
            timer: 1500
          });
          this.fetchDeactivatedUsers();
        },
        (error) => {
          Swal.fire({
            icon: 'success',
            title: 'User activated successfully',
            showConfirmButton: false,
            timer: 1500

          });
          this.fetchDeactivatedUsers();
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Username cannot be empty'
      });
    }
  }

  fetchDeactivatedUsers() {
    this.activationService.getDeactivatedUsers().subscribe(
      (users) => {
        this.deactivatedUsers = users;
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error fetching deactivated users: ' + error.message
        });
      }
    );
  }
}
