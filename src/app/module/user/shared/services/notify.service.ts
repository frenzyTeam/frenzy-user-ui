import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from '../../../../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  private notifyToggleMenuBar = new ReplaySubject<any>();
  notifyMenuToggleObservable$ = this.notifyToggleMenuBar.asObservable();

  private notifyChangeScreen = new ReplaySubject<any>();
  notifyChangeScreenObservable$ = this.notifyChangeScreen.asObservable();

  constructor() { }

  public notifyToggleMenu(data: any) {
    if (data) {
      this.notifyToggleMenuBar.next(data);
    }
  }

  public notifyScreen(data: any) {
    if (data) {
      this.notifyChangeScreen.next(data);
    }
  }

}
