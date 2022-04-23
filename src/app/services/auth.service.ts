import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL:String = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  signUp(user: any) {
    return this.http.post<any>(this.URL + 'signup/', user);
  }

  signIn(user: any) {
    return this.http.post<any>(this.URL + 'login/', user);
  }  
}
