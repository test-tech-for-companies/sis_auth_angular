import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; // import router from angular router
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'authentication';

  public is_auth:boolean = false;

  constructor(
    private route: Router,
    private dataService: DataService,
    ) {
    this.verifyAuth();
    let isAuth = localStorage.getItem('isAuth')
    if (isAuth != null) {
      this.is_auth = (isAuth === 'true');
    }      
    
  }

  ngOnInit(): void {
    this.dataService.isAuth$.subscribe( (bool: boolean) => {
      this.is_auth = bool;
      this.verifyAuth();
    });
  }

  verifyAuth() {
    let isAuth = (localStorage.getItem('isAuth') === 'true');
    if (this.is_auth === isAuth) {
      this.loadLogIn();
    } else {
      this.loadHome();
    }
  }

  loadHome() {
    this.route.navigate(['/home']);
  }
  
  loadLogIn() {
    this.route.navigate(['/signin']);
  }
  
  loadSignUp() {
    this.route.navigate(['/signup']);
  }

  logOut() {
    localStorage.clear();
    this.dataService.isAuth$.emit(false);
  }

  loadAccount() {
    this.route.navigate(['/profile']);
  }

}