import { Component } from '@angular/core';
import {LoginModel} from "../models/loginModel";
import {UserService} from "../service/userService";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUser: LoginModel = new LoginModel();

  constructor(private userService:UserService, private cookieService:CookieService,private router: Router) {
  }

  onsubmit(event:Event) {
    event.preventDefault();
    this.userService.loginUser(this.loginUser).subscribe(data=> {
      console.log(data)
      this.router.navigate(['/panel'])
    })
    console.log(this.cookieService.getAll());

  }
}
