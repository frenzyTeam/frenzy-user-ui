import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UtilService } from 'src/app/core/services/util.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private util: UtilService) { }
  addBalance(body) {
    return this.http.post(this.util.generateUrl(environment.auth.addBalance), body)
  }
  getTransactions() {
    let urlLink = this.util.generateUrl(environment.auth.getTransaction)
      urlLink = urlLink.replace(':userid', localStorage.getItem('userid'))
    // urlLink = urlLink.replace(':userid', 6)
    return this.http.get(urlLink)
  }
}
