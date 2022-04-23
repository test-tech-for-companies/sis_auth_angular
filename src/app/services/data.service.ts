import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  isAuth$ = new EventEmitter<boolean>();

  constructor() { }
}
