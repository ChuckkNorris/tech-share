import { Component, ViewEncapsulation } from '@angular/core';
import { SecurityService } from './services/security.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private securityService: SecurityService) {}

  isAuthenticated():boolean{ return this.securityService.isAuthenticated()};

}
