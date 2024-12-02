import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
})
export class HeaderComponent {
  @Output() toggleLoginForm = new EventEmitter<void>();

  onClickLogin() {
    this.toggleLoginForm.emit();
  }

  @Output() toggleSignupForm = new EventEmitter<void>();

  onClickSignup() {
    this.toggleSignupForm.emit();
  }
}
