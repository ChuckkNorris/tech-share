import { Injectable } from '@angular/core';

@Injectable()
export class SecurityService {

  private userIsLoggedIn: boolean = false;
  constructor() { }
  private testEmail = 'test@test.com';
  private testPassword = 'test';

  // TODO: Login via server
  login(email: string, password: string): void {
    if (email == this.testEmail && password == this.testPassword)
      this.userIsLoggedIn = true;
  }

  isAuthenticated(): boolean {
    return this.userIsLoggedIn;
  }



}
