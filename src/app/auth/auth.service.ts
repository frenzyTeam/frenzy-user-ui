import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UtilService } from '../core/services/util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private util: UtilService) { }
  registerUser(body) {
    return this.http.post(this.util.generateUrl(environment.auth.register), body)
  }
  subAdminList() {
    return this.http.get(this.util.generateUrl(environment.auth.subadminlist))
  }
  onLogin(body) {
    return this.http.post(this.util.generateUrl(environment.auth.login), body)
  }
  getProfile() {
    let urlLink = this.util.generateUrl(environment.auth.profile)
    urlLink = urlLink.replace(':userid', localStorage.getItem('userid'))
    return this.http.get(urlLink)
  }
  updateProfile(body) {
    let urlLink = this.util.generateUrl(environment.auth.updateProfile)
    urlLink = urlLink.replace(':id', localStorage.getItem('userid'))
    return this.http.post(urlLink, body)
  }

}
