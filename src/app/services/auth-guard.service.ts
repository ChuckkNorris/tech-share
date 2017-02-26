import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SecurityService } from './security.service'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private securityService: SecurityService
  ) { }

  canActivate() : boolean {
    if (this.securityService.isAuthenticated()) {
      return true;
    }
    else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
