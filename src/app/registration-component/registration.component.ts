import {Component} from '@angular/core';
import {RegistrationModel} from "../models/registrationModel";
import {UserService} from "../service/userService";

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationUser: RegistrationModel = new RegistrationModel();

  constructor(private userService: UserService) {
  }

  onsubmitRegistration(event: Event) {
    event.preventDefault();
    return this.userService.registrationUser(this.registrationUser).subscribe(user => console.log(user))
  }
}
