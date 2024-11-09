import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  onSignIn() {
    // Implement sign in logic
    this.routerExtensions.navigate(['/dashboard'], { clearHistory: true });
  }

  onSocialSignIn() {
    // Implement social sign in logic
  }

  onRegister() {
    // Navigate to registration page
  }

  onSkip() {
    this.routerExtensions.navigate(['/dashboard'], { clearHistory: true });
  }
}