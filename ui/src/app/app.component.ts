import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public profilePicUrl: string;
  isHomePage: boolean = false;
  isLoginOrProfilePage: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.userPic.subscribe(url => {
      this.profilePicUrl = url;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.urlAfterRedirects === '/home';
        this.isLoginOrProfilePage = (event.urlAfterRedirects === '/login') || (event.urlAfterRedirects === '/profile');
      }
    });
  }

  navigateToGitHub() {
    window.open('https://github.com/galwort/paper', '_blank');
  }

  loginOrProfile() {
    const userId = this.authService.getCurrentUserId();
    if (userId) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['/login']);
    }
  }  
}
