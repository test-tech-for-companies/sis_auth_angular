import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  user = { 
    name: '', 
    email: '', 
    date: (new Date()).toJSON().toString() 
  }
  
  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {}

  async getData() {
    if (localStorage.getItem("token") === null) {
      this.dataService.isAuth$.emit(false);
      localStorage.setItem('isAuth', 'false');
      return;
    }

  }


}
