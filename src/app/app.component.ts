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
  }

  ngOnInit(): void {
    this.dataService.isAuth$.subscribe( (bool: boolean) => {
      this.is_auth = bool;
      this.verifyAuth();
    });
  }

  verifyAuth() {
    if (this.is_auth === false)
      this.loadLogIn();
    else
      this.loadHome();
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

}