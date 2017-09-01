import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from "../core/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  username = "";
  password = "";

  ngOnInit() {
  }

  onSubmit(formVal) {
    console.log('auth result is: ' +
      this.authService.loginWithCredentials(formVal.login.username, formVal.login.password))
  }
}
