import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getDetailUser() {
    const headers = new HttpHeaders({'Authorization': `Token ${this.getToken()}`});
    return this.http.get<any>(this.URL + `detail/${this.getUserId()}/` , { headers });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserId() {
    return localStorage.getItem('user_id');
  }  

  getSingIng() {
    return !!localStorage.getItem('token');
  }
  

  getUser() {
    return localStorage.getItem('user');
  }
}
