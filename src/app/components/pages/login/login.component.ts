import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Router } from '@angular/router';

declare var google:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  @Output() userDataUpdated: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.router.navigate(['/']);
      return;
    }
    google.accounts.id.initialize({
      client_id: '158580848731-ii8v1mag3l3jdlmhk1tscplgnjs8qgii.apps.googleusercontent.com',
      callback: (response:any)=>{
        this.handleLogin(response);
      }
    });
    google.accounts.id.renderButton(document.getElementById('google-login'),{
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width:'100%',
    });
  }
  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }
  handleLogin(userData: any) {
    if(userData) {
      const payLoad = this.decodeToken(userData.credential);
      sessionStorage.setItem("LoggedInUser", JSON.stringify(payLoad));
      this.userDataUpdated.emit(payLoad);
      this.router.navigate(['/']);
    }
  }
  isLoggedIn(): boolean {
    // Check if the user is logged in based on session storage or any other method you're using
    const userData = sessionStorage.getItem('LoggedInUser');
    return !!userData; // Convert to boolean
  }
}
