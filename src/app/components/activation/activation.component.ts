import { Component } from '@angular/core';
import { ActivationService } from 'src/app/services/activationservice/activation.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent {
  username: string = '';
  constructor(private activationService:ActivationService) {}

  activeUser()  {
    if (this.username.trim() !== '') {
      this.activationService.activateUser(this.username).subscribe(
        () => {
          console.log('User activated successfully');
        },
        (error) => {
          console.error('Error activating user:', error);
        }
      );
    } else {
      console.error('Username cannot be empty');
    }
  }


}
