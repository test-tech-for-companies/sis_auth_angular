import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  user = { 
    name: '', 
    email: '', 
    date: '' 
  }
  
  constructor(
    private dataService: DataService,
    private authService: AuthService
  ) {
    this.getData();
  }
  
  ngOnInit(): void {}

  getData() {
    if (localStorage.getItem("token") === null) {
      this.dataService.isAuth$.emit(false);
      localStorage.setItem('isAuth', 'false');
      return;
    }
    
    this.authService.getDetailUser()
      .subscribe(
        res => this.setInfo(res),
        err => console.log(err)
      );
  }

  setInfo(res: any) {
    this.user.name = res.name;
    this.user.email = res.email;
    this.user.date = `${(new Date()).toLocaleString("es-CO", {timeZone: `UTC`})} UTC`;
  }
}
