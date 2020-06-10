import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MessageConstant } from '../../config/constant/message-constant';
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }
  generateUrl(urlPath) {
    return environment.url + ":" + environment.port + "/" + urlPath
  }
  get fetchMessageConstant() {
    console.log(MessageConstant)
    return MessageConstant.message;

  }
  get fetchKeyConstant() {
    return MessageConstant.key;
  }
}
