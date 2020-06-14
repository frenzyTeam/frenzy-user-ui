import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

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
  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.showSuccess()
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
  }

  onLogin() {
    this.authService.onLogin({ data: this.login }).subscribe((response) => {
      localStorage.setItem('token', response['data']['token'])
      localStorage.setItem('userid', response['data']['userid'])
      this.router.navigate(['/app/home']);
    });
  }
}
