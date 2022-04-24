import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private router: Router,

  ) { }

  canActivate(): boolean {
    if (this.authService.getSingIng()) {
      return true;
    }

    this.dataService.isAuth$.emit(false);
    //this.router.navigate(['/signin']);
    return false;
  }

}
