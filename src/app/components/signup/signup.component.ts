import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() completedSignUp = new EventEmitter<string>();

  user = {
    name: '',
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    console.log(this.user);
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.loadSession(res);
        },
        err => console.log(err)
      )
  }

  loadSession(res: any) {
    localStorage.setItem('token', res.token);
    this.dataService.isAuth$.emit(true);
  }
}
