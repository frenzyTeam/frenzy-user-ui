import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from 'src/app/core/services/util.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private http: HttpClient, private util: UtilService) {
  }
  saveBet(body) {
    let urlLink = this.util.generateUrl(environment.bet.save)
    return this.http.post(urlLink, body)
  }
  getBet() {
    let urlLink = this.util.generateUrl(environment.bet.get)
    return this.http.get(urlLink)
  }
}
