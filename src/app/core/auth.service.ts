import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Auth} from "../entities";
import {UserService} from "./user.service";

@Injectable()
export class AuthService {

  constructor(private http: Http, private userService: UserService) { }

  loginWithCredentials(username: string, password: string): Promise<Auth> {
    return this.userService
      .findUser(username)
      .then(user => {
        let auth = new Auth();
        localStorage.removeItem('userId');
        auth.redirectUrl = localStorage.getItem('redirectUrl');
        if (auth.redirectUrl == null)
          auth.redirectUrl = '/';

        if (user === null) {
          auth.hasError = true;
          auth.errMsg = 'user not found';
        }
        else if (password === user.password) {
          auth.user = Object.assign({}, user);
          auth.hasError = false;
          localStorage.setItem('userId', user.id.toString());
        }
        else {
          auth.hasError = true;
          auth.errMsg = 'password not match';
        }
        return auth;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.meaning || error);
  }
}
