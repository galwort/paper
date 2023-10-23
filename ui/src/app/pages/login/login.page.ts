import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginData } from 'src/app/interfaces/login-data.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginData: LoginData = { email: '', password: '' };

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}
  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then(() => this.router.navigate(['']))
      .catch((e) => console.error('Google login failed:', e.message));
  }
}
