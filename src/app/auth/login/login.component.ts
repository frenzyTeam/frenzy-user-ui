import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = {
    username: "",
    password: ""
  }
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onLogin() {
    this.authService.onLogin({ data: this.login }).subscribe((response) => {
      localStorage.setItem('token', response['data']['token'])
      localStorage.setItem('userid', response['data']['userid'])
      this.router.navigate(['/app/dashboard']);
    });
  }
}
