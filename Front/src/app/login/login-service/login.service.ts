import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token;
  constructor() { }

  auth(user: string, password: string): boolean {

    if (user == 'us' && password == 'SP') {
      localStorage.setItem('token', '.NET_SP');
      return true;
    } else {
      return false;
    }

  }

  
}
