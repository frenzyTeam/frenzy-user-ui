import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject, Observable } from '../../../../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private isLoadingSubject = new Subject<boolean>();
  private isBetSubject = new Subject<boolean>();
  private isProfileSubject = new Subject<boolean>();
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

  isBetSave(isLoading: boolean) {
    this.isBetSubject.next(isLoading);
  }

  isBetSaved(): Observable<boolean> {
    return this.isBetSubject.asObservable();
  }

  saveProfile(isLoading: boolean) {
    this.isBetSubject.next(isLoading);
  }

  getProfile(): Observable<boolean> {
    return this.isBetSubject.asObservable();
  }


  setLoading(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }

  getLoading(): Observable<boolean> {
    return this.isLoadingSubject.asObservable();
  }

}
