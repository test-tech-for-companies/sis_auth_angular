import { Injectable } from '@angular/core';
import { HttpRequest, HttpEvent, HttpInterceptor,  HttpHandler } from '@angular/common/http'
import {AuthService} from './auth.service'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user = this.authService.getUser();
    let token = this.authService.getToken();
    let tokenizeReq: any;

    tokenizeReq = request.clone({
      setHeaders: {
        Authorization: `Token ${this.authService.getToken()}`
      }
    });   

    return next.handle(tokenizeReq);
  }
}