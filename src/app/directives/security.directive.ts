import { Directive } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../services/security.service';

@Directive({
  selector: '[ifAuthenticated]'
})
export class SecurityDirective {

  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {
    this.checkSecurity();
  }

  checkSecurity() {
     if (this.securityService.isAuthenticated()) {
      // Load page
    }
    else {
      // Navigate to security page
      this.router.navigate(['/login'])
    }
  }




}
