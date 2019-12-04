import { Injectable, ɵConsole } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(loginData:any) {
    if (loginData) {
      localStorage.setItem('token', loginData.token);
      localStorage.setItem('userName', loginData.userName)
      localStorage.setItem('userId',loginData.userId)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('email')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email')
  }

}
