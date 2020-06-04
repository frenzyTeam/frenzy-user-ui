import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilService } from './util.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient, private util: UtilService) { }
  public isAuthenticated() {
    if(localStorage.getItem('token')){
      return true
    }
    return false
    // return this.tokenService().map((res) => res.json())['key']
  }
  private tokenService() {
    let headers = new HttpHeaders();
    headers = headers.set('x-access-token', localStorage.getItem('token'));
    return this.http.get(this.util.generateUrl(environment.token.me))
  }
}
