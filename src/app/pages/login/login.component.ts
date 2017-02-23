import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../../services/security.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _securityService: SecurityService, private router: Router) { }

  ngOnInit() {
  }
  email: string = '';
  password: string = '';
  login() {
    this._securityService.login(this.email, this.password);
    if (this._securityService.isAuthenticated()) {
      console.log('is logged in');
      this.router.navigate(['/browse']);
    }
  }
}
