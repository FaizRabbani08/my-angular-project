import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeroComponent } from './hero/hero.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    LoginComponent,
    SignupComponent,

    HeroComponent,
    CategoriesComponent,
    FeaturedComponent,
    FooterComponent,
    ReactiveFormsModule,
  ],
  // template: '<div>{{ message }}</div>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  message = '';

  constructor(private backendService: BackendService) {}
  title = 'project';
  showLoginForm = false;

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }
  showSignupForm = false;
  toggleSignupForm() {
    this.showSignupForm = !this.showSignupForm;
  }

  ngOnInit(): void {
    this.backendService.ping().subscribe(
      (response) => {
        this.message = response.message;
      },
      (error) => {
        console.error('Ping error:', error);
        this.message = 'Error connecting to backend';
      }
    );
  }
}
