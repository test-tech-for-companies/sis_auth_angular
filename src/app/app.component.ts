import { Component } from '@angular/core';
import {Router} from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authentication';

  public is_auth:boolean = false;

  constructor(private route:Router) {
    this.verifyAuth();
  }

  verifyAuth() {
    if(this.is_auth === false)
      this.route.navigate(['/signin']);
    console.log("hola");
    //this.$router.push({name: "logIn"})
  }
  
  loadLogIn(){
    this.route.navigate(['/signin']);
  }
  
  loadSignUp(){
    //this. $router.push({name: "signUp"})
    this.route.navigate(['/signup']);
    console.log("helll");
  }
  
  completedLogIn(data: String){
    console.log(data);
  }
    
  completedSignUp(data: String) {
    console.log(data);
  }
}
