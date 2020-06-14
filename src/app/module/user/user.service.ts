import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from 'src/app/core/services/util.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private util: UtilService) { }
  getMessage() {
    let urlLink = this.util.generateUrl(environment.lookup.lookup)
    urlLink += "?name=message_config"
    return this.http.get(urlLink)
  }

}
