import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { NotifyService } from 'src/app/module/user/shared/services/notify.service';
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
  constructor(private authService: AuthService, private router: Router, private messageService: MessageService,private notify:NotifyService) { }

  ngOnInit() {
   
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successfully' });
  }

  onLogin() {
    // this.notify.setLoading(true);
    this.authService.onLogin({ data: this.login }).subscribe((response) => {
      localStorage.setItem('token', response['data']['token'])
      localStorage.setItem('userid', response['data']['userid'])
      // this.notify.setLoading(false);
      this.router.navigate(['/app/home']);
      this.showSuccess()
    });
  }
}
