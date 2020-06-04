import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../core/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class DeauthGuard implements CanActivate {
  constructor(public auth: TokenService, public router: Router) { }
  canActivate(): boolean {
    console.log(this.auth.isAuthenticated())
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/app/dashboard']);
      return false;
    }
    return true;
  }
}
