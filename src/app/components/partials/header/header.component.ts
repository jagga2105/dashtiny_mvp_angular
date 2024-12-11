import { Router } from '@angular/router';
import { AuthService } from './../../../auth.service';
import { Component } from '@angular/core';
declare var google: any;
declare const gapi: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userData: any;
  isDropdownOpen: boolean = false;
  isNotificationDropdownOpen: boolean = false;
  constructor(private authService: AuthService, private router: Router){
  }
  toggleDropdown(dropdown: any) {
    dropdown.classList.toggle('show');
  }

  ngOnInit(): void {
    this.getUserDataFromSession();
  }
  toggleProfileDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toggleNotificationDropdown(): void {
    this.isNotificationDropdownOpen = !this.isNotificationDropdownOpen;
  }
  closeDropdown(): void {
    this.isDropdownOpen = false;
  }
  getUserDataFromSession(): void {
    const userDataString = sessionStorage.getItem('LoggedInUser');
    if (userDataString) {
      this.userData = JSON.parse(userDataString);
    }
  }
  getUserProfileImage(): string {
    return this.userData?.picture || 'path_to_default_image'; // Replace 'path_to_default_image' with your default image path
  }

  // Function to get user name
  getUserName(): string {
    return this.userData?.name || 'Guest'; // Replace 'Guest' with a default name if needed
  }
  isLoggedIn(): boolean {
    const user = sessionStorage.getItem('LoggedInUser');
    return !!user;
  }

signOut(){
  sessionStorage.removeItem('LoggedInUser');
  this.authService.signOut();
  this.userData = null;
}
onUserDataUpdated(updatedUserData: any): void {
  this.userData = updatedUserData;
}
loadDashboard(): void {
  this.router.navigate(['/dashboard']);
}
}
