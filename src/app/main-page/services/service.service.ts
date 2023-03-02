import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  private _flag_language: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  getFlagLanguage(): Observable<boolean> {
    return this._flag_language.asObservable();
  }

  toggleFlagLanguage() {
    this._flag_language.next(!this._flag_language.value);
  }
}
