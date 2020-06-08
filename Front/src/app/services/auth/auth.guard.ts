import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { LoginService } from '../../login/login-service/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public loginService: LoginService, public router: Router) { }

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | boolean {

      if (localStorage['token'] != null) {
          return true;
      } else {
          this.router.navigate(['/login']);
      }
  }
}