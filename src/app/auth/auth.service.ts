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
    console.log(body)
    return this.http.post(this.util.generateUrl(environment.auth.register), body)
  }
  subAdminList() {
    return this.http.get(this.util.generateUrl(environment.auth.subadminlist))
  }
}
