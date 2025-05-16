import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Form properties
  email: string = '';
  password: string = '';
  phoneNumber: string = '';
  activeTab: 'email' | 'phone' = 'email';
  isOtpSent: boolean = false;

  constructor(private router: Router) {}

  // Handle Google login
  handleGoogleLogin() {
    console.log('Google login clicked');
    // Implement Google login logic
  }

  // Handle Facebook login
  handleFacebookLogin() {
    console.log('Facebook login clicked');
    // Implement Facebook login logic
  }

  // Handle email login
  handleEmailLogin() {
    console.log('Email login:', { email: this.email, password: this.password });
    // Implement email login logic
  }

  // Handle OTP sending
  handleSendOtp() {
    console.log('Sending OTP to:', this.phoneNumber);
    this.isOtpSent = true;
    // Implement OTP sending logic
  }

  // Handle OTP input
  onOtpDigitInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if (input.value && input.nextElementSibling instanceof HTMLInputElement) {
      input.nextElementSibling.focus();
    }
  }
}
