import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BootstrapGridModule } from 'ng2-bootstrap-grid';
import { MaterialModule } from '@angular/material';
import { NavMenuComponent } from './templates/nav-menu/nav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthenticationErrorComponent } from './templates/authentication-error/authentication-error.component';
import { SecurityService } from './services/security.service';
import { AppRoutingModule } from './app-routing.module';
import { SecurityDirective } from './directives/security.directive';
import { AuthGuard } from './services/auth-guard.service';
import { PortfolioCardComponent } from './templates/portfolio-card/portfolio-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    BrowseComponent,
    ProfileComponent,
    AdminComponent,
    AuthenticationErrorComponent,
    SecurityDirective,
    PortfolioCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    BootstrapGridModule.forRoot()
  ],
  providers: [SecurityService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
