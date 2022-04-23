import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @Output() completedLogIn = new EventEmitter<string>();

  user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
  }

  signIn() {
    console.log(this.user);
    
    this.authService.signIn(this.user)
      .subscribe(
        res => this.loadSession(res),
        err => console.log(err)
      )
  }

  loadSession(res: any) {
    localStorage.setItem('token', res.token);
    this.dataService.isAuth$.emit(true);
  }
}
